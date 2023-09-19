// Login.js
import { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function Login() {
  const navigate = useNavigate();
  const { session } = useAuth();
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
    if (session) {
      navigate("/message");
    }
  }, [session, navigate]);

  if (session)
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
