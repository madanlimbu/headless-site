import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Buffer } from "node:buffer";

export async function middleware(request: NextRequest) {
  const imageUrl = `${process.env.STRAPI_URL}${request.nextUrl.pathname}`;
  const image = await fetch(imageUrl);
  const imageBlob = await image.blob();
  const type = imageBlob.type;
  const arrayBuffer = await imageBlob.arrayBuffer();
  const buf = Buffer.from(arrayBuffer);

  return new NextResponse(buf);
  // return NextResponse.redirect(
  //   new URL(`${process.env.STRAPI_URL}${request.nextUrl.pathname}`)
  // );
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/uploads/:path*",
};
