import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // TODO check authentication
  let isAuthenticated = true;

  if (isAuthenticated) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/test", request.url));
}

export const config = {
  matcher: "/:path*",
};
