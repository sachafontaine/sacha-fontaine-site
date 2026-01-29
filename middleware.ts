import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Sert la page unique du site (Template Portfolio AI Engineer) à la racine "/".
 * Les assets (images, _next, api) passent à Next.js. Tout autre chemin redirige vers "/".
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Laisser passer les assets et l'API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes(".") // fichiers statics (favicon, etc.)
  ) {
    return NextResponse.next();
  }

  // Page unique : servir index.html à la racine pour les requêtes GET
  if (pathname === "/" && request.method === "GET") {
    const baseUrl = request.nextUrl.origin;
    const htmlResponse = await fetch(`${baseUrl}/index.html`);
    if (htmlResponse.ok) {
      const html = await htmlResponse.text();
      return new NextResponse(html, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      });
    }
  }

  // Tout autre chemin → redirection vers la page unique
  return NextResponse.redirect(new URL("/", request.url));
}
