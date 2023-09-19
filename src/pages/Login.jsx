// Login.js
import { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function Login() {
  const navigate = useNavigate();
  const { session, isLoading, getSession } = useAuth();
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="mx-auto flex sm:h-[66vh] 3xl:h-[68vh] py-28  max-w-xl items-center justify-center p-6">
        <div className="w-full">
          <Auth
            supabaseClient={supabase}
            appearance={appearance}
            providers={["google"]}
            view="sign_in"
            redirectTo="http://localhost:5173/messages"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
