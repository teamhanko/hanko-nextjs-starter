import { NextResponse, NextRequest } from "next/server";

const hankoApiUrl = process.env.NEXT_PUBLIC_HANKO_API_URL;

export async function middleware(req: NextRequest) {

  const token = req.cookies.get("hanko")?.value;

  try {
    const response = await fetch(hankoApiUrl + '/sessions/validate', {
      method: 'GET',
      headers: {
        'Cookie': `hanko=${token}` // If using cookie
        // 'Authorization': `Bearer ${token}` // If using Authorization header
      }
    });

    if (!response.ok) {
      throw new Error('Session validation failed');
    }
    
    const data = await response.json();
    console.log(data)
    
    if(!data.is_valid){
      throw new Error('JWT is not valid');
    }

  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
export const config = {
  matcher: ["/dashboard"],
};
