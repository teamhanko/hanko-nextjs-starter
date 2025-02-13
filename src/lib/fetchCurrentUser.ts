import { cookies } from "next/headers";

const hankoApiUrl = process.env.NEXT_PUBLIC_HANKO_API_URL || '';

export async function fetchCurrentUser() {
  try {
    const cookieToken = (await cookies()).get("hanko")?.value;

    const validationOptions = { 
      method: 'GET',
      headers: {
        'Cookie': `hanko=${cookieToken}` // If using cookie
        // 'Authorization': `Bearer ${token}` // If using Authorization header
      }
    }

    const validationResponse = await fetch(hankoApiUrl + '/sessions/validate', validationOptions); //Get session data
    if (!validationResponse.ok) {
      throw new Error("validation was not succesfull");
    }
    const validationData = await validationResponse.json();

    if(!validationData.is_valid){ //Validate session data
      throw new Error("validation was not succesfull");
    }

    const userid = validationData.user_id; //use user id to request data
    const userResponse = await fetch(hankoApiUrl + '/users/' + userid, validationOptions);
    if (!userResponse.ok) {
      throw new Error("Could not get user data");
    }
    const userData = await userResponse.json();

    return userData;

    } catch (error) {
      console.log(error)
      return null;
    }
}
