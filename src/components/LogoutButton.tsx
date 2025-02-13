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
      await hanko?.user.logout();
      router.push("/");
      router.refresh();
      return;
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
 
  return <button onClick={logout}>Sign-Out</button>;
}
