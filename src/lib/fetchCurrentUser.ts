// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import * as jose from "jose";

// const hankoApiUrl = process.env.NEXT_PUBLIC_HANKO_API_URL;

// export async function fetchCurrentUser() {
//   const token = cookies().get("hanko")?.value;

//   if (!token) {
//     return redirect("/login");
//   }

//   const JWKS = jose.createRemoteJWKSet(
//     new URL(`${hankoApiUrl}/.well-known/jwks.json`)
//   );

//   let payload;

//   try {
//     const verifiedJWT = await jose.jwtVerify(token, JWKS);
//     payload = verifiedJWT.payload;
//   } catch {
//     return redirect("/login");
//   }

//   const userID = payload.sub;

//   const response = await fetch(`${hankoApiUrl}/users/${userID}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!response.ok) {
//     return redirect("/login");
//   }

//   const userData = await response.json();

//   return userData;
// }

import { cookies } from "next/headers";
import * as jose from "jose";

const hankoApiUrl = process.env.NEXT_PUBLIC_HANKO_API_URL;

export async function fetchCurrentUser() {
  const token = cookies().get("hanko")?.value;
  const payload = jose.decodeJwt(token ?? "");

  const userID = payload.sub;
  const email = payload.email;
  console.log(payload)
  console.log(email)

  const response = await fetch(`${hankoApiUrl}/users/${userID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return null;
  }

  const userData = await response.json();
  return userData;
}
