import { useState, useEffect } from "react";
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL || "";

interface SessionState {
  userID: string;
  jwt: string;
  isValid: boolean;
  loading: boolean;
  error: string | null;
}

export function useSessionData() {
  const [hanko, setHanko] = useState<Hanko>();
  const [sessionState, setSessionState] = useState<SessionState>({
    userID: "",
    jwt: "",
    isValid: false,
    loading: true,
    error: null,
  });

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi))
    );
  }, []);

  useEffect(() => {
    if (hanko) {
      const isValid = hanko.session.isValid();
      const session = hanko.session.get();

      if (isValid && session) {
        const { userID, jwt = "" } = session;
        setSessionState({
          userID,
          jwt,
          isValid,
          loading: false,
          error: null,
        });
      } else {
        setSessionState((prevState) => ({
          ...prevState,
          isValid: false,
          loading: false,
          error: "Invalid session",
        }));
      }
    }
  }, [hanko]);

  return sessionState;
}
