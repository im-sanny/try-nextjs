import { NextResponse } from "next/server";

const user = true;
const co = 'nextjs'

export const middleware = (request) => {
  const cookies = request.cookies.get("token");
  if (!cookies || cookies.value !== co) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
};

export const config = {
  matcher: ["/about", "/services"],
};
