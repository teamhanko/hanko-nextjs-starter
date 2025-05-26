"use client";
 
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Hanko } from "@teamhanko/hanko-elements";
 
const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;
 
export default function LogoutBtn() {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();
 
  useEffect(() => setHanko(new Hanko(hankoApi ?? "")), []);
 
  const logout = async () => {
    try {
      await hanko?.logout();

      router.replace("/");//Path user gets redirected to after logging out.
      
      return;
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
 
  return <button onClick={logout}>Sign-Out</button>;
}
