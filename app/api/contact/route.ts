import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

type Captcha = {
  a?: number;
  b?: number;
};

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  captcha?: Captcha;
  captchaAnswer?: string;
}

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const DATA_DIR = path.join(process.cwd(), "data");
const CONTACT_FILE = path.join(DATA_DIR, "contact-messages.json");

async function saveContactMessage(entry: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    await mkdir(DATA_DIR, { recursive: true });

    let existing: unknown[] = [];
    try {
      const raw = await readFile(CONTACT_FILE, "utf8");
      existing = JSON.parse(raw);
      if (!Array.isArray(existing)) {
        existing = [];
      }
    } catch (error) {
      existing = [];
    }

    const payload = {
      ...entry,
      createdAt: new Date().toISOString(),
    };

    await writeFile(CONTACT_FILE, JSON.stringify([...existing, payload], null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Failed to persist contact message locally", error);
    return false;
  }
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch (error) {
    console.error("Invalid contact payload", error);
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { name, email, message, captcha, captchaAnswer } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim() || !captchaAnswer?.trim()) {
    return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
  }

  const expected = (captcha?.a ?? 0) + (captcha?.b ?? 0);
  if (Number(captchaAnswer) !== expected || expected <= 0) {
    return NextResponse.json({ error: "Captcha invalide." }, { status: 400 });
  }

  if (!RESEND_API_KEY) {
    const stored = await saveContactMessage({ name, email, message });

    if (!stored) {
      return NextResponse.json(
        { error: "Impossible d'enregistrer le message pour le moment." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, note: "Message enregistré localement." });
  }

  const fromAddress = process.env.RESEND_FROM_EMAIL || "contact@sacha-fontaine.com";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: ["sachafontaine.pro@gmail.com"],
        reply_to: email,
        subject: `Nouveau message de ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      const errorDetail = await response.text();
      console.error("Resend error", errorDetail);
      return NextResponse.json({ error: "Impossible d'envoyer le message pour le moment." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      { error: "Impossible d'envoyer le message pour le moment." },
      { status: 500 },
    );
  }
}
