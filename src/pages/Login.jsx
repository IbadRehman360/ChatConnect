// import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
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

  if (session) navigate("/messages");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

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
