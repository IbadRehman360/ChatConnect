import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../services/supabase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [authUserData, setAuthUserData] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setSession(session);
      setIsAuth(true);
      setAuthUserData(user);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSession();
  }, []);

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return false;
    }
    return true;
  }
  return (
    <AuthContext.Provider
      value={(isLoading, isAuth, session, authUserData, signOutUser)}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Error, context being used out of provider");
  return context;
}
