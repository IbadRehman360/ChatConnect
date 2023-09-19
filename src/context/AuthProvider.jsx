import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../services/supabase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null); // Change initial state to null
  const [authUserData, setAuthUserData] = useState(null); // Change initial state to null
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getSession = async () => {
    const { session, user, error } = await supabase.auth.session(); // Simplified session retrieval
    if (session) {
      setSession(session);
      setAuthUserData(user); // Fixed the function call
      setIsAuth(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getSession();
  }, []);

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return false;
    }
    setSession(null);
    setIsAuth(false);
    setAuthUserData(null);
    return true;
  }

  const contextValue = {
    isLoading,
    isAuth,
    session,
    authUserData,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Error, context being used out of provider");
  }
  return context;
}
