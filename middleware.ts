import { NextResponse, NextRequest } from "next/server";

import { jwtVerify, createRemoteJWKSet } from "jose";

const hankoApiUrl = process.env.NEXT_PUBLIC_HANKO_API_URL;

export async function middleware(req: NextRequest) {

  const hanko = req.cookies.get("hanko")?.value;
  const tenant_id = req.cookies.get("hanko")?.value;

  const options = {method: 'GET'};

  fetch(hankoApiUrl + '/sessions/validate', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.log(err));



  // Original verification with JWKSet's
  // const JWKS = createRemoteJWKSet(
  //   new URL(`${hankoApiUrl}/.well-known/jwks.json`)
  // );

  // try {
  //   const verifiedJWT = await jwtVerify(hanko ?? "", JWKS);
  // } catch {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }
}
export const config = {
  matcher: ["/dashboard"],
};
