import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // TODO check authentication
  let isAuthenticated = false;

  if (isAuthenticated) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ['/dashboard', '/system', '/profile'], //Pages blocked by authentication
  // "/:path*",
};
