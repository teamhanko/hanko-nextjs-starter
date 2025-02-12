"use client"

import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";

import './hanko-style.css'

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

export default function HankoProfile() {
  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  }, []);

return <hanko-profile />;
}

