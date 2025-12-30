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

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch (error) {
    console.error("Invalid contact payload", error);
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const { name, email, message, captcha, captchaAnswer } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim() || !captchaAnswer?.trim()) {
    return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
  }

  const expected = (captcha?.a ?? 0) + (captcha?.b ?? 0);
  if (Number(captchaAnswer) !== expected || expected <= 0) {
    return NextResponse.json({ error: "Captcha invalide." }, { status: 400 });
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
