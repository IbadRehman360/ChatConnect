// Login.js
import { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function Login() {
  const navigate = useNavigate();
  const { session, isAuth, isLoading } = useAuth();
  const appearance = {
    theme: ThemeSupa,
    variables: {
      default: {
        colors: {
          brand: "#242633",
          brandAccent: "#3b404e",
        },
      },
    },
  };
  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event == "SIGNED_IN") navigate("/message");
    });
  }, [navigate]);

  useEffect(() => {
    if (isAuth) {
      navigate("/message");
    }
  }, [isAuth, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Auth
      supabaseClient={supabase}
      appearance={appearance}
      providers={["google"]}
      view="sign_in"
      redirectTo="http://localhost:5173/"
    />
  );
}
