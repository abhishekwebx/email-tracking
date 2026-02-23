// import nodemailer from "nodemailer";

// export const transporter = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: Number(process.env.MAIL_PORT || 587),
//   secure: false, // TLS for port 587
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// });

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const isAuthPage =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/register";

  // If user not logged in → redirect to login
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If user logged in → prevent going to login page again
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/crm/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/crm/:path*", "/send/:path*", "/profile/:path*"],
};
