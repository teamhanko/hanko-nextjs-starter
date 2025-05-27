import { NextResponse, NextRequest } from "next/server";
import { validateCurrentSession } from "@/lib/validateCurrentSession";

export async function middleware(req: NextRequest) {

  const isValid = await validateCurrentSession();

  if(!isValid){
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/profile"],
};
