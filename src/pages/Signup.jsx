import { useEffect, useState } from "react";
import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Signup() {
  const { session } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      if (error) {
        console.log(error);
        setError(error);
      }
    } catch (error) {
      setError(error);
    }
  }
  useEffect(() => {
    if (session) {
      console.log("User is authenticated, redirecting to /message");
      navigate("/message");
    }
  }, [session, navigate]);
  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event == "SIGNED_IN") navigate("/message");
    });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Signup</h1>
        <div className="text-red-500 mb-4">{error}</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              placeholder="Password"
              name="password"
              type="password"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
