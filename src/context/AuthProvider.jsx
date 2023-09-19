import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [userData, setUserData] = useState(null);

  async function getSession() {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        console.log("User data:", user);
        setSession(session);
        setIsAuth(true);
        setUserData(user);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error getting session:", error);
      setIsLoading(false);
    }
  }

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    } else {
      window.location.reload();
    }
  }
  useEffect(() => {
    getSession();
  }, []);

  if (!isLoading)
    return (
      <AuthContext.Provider
        value={{
          isLoading,
          isAuth,
          session,
          userData,
          getSession,
          signOutUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) return "Error, context being used out of provider";
  return context;
}

export { AuthProvider, useAuth };
