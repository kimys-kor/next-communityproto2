import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/partner/:path*",
    "/sport/:path*",
    "/community/:path*",
    "/event/:path*",
    "/promotion/:path*",
    "/customer/:path*",
  ],
};
