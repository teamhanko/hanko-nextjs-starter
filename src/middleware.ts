import { NextResponse, NextRequest } from "next/server";

const hankoApiUrl = process.env.NEXT_PUBLIC_HANKO_API_URL || '';

export async function middleware(req: NextRequest) {

  const cookieToken = req.cookies.get("hanko")?.value;

  const validationOptions = { 
    method: 'GET',
    headers: {
      'Cookie': `hanko=${cookieToken}` // If using cookie
      // 'Authorization': `Bearer ${token}` // If using Authorization header
    }
  }

  try {
    const response = await fetch(hankoApiUrl + '/sessions/validate', validationOptions);

    if (!response.ok) throw new Error('Session validation failed');
    
    
    const verifiedResponse = await response.json();
    console.log(verifiedResponse)

    if(!verifiedResponse.is_valid) throw new Error('JWT is not valid');

  } catch (error) {
    console.log(error)
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/dashboard",'/profile'],
};
