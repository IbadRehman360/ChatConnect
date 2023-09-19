import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Header() {
  const { signOutUser } = useAuth();
  // const navigate = useNavigate();
  // async function handleSignOut() {
  //   const signedOut = await signOutUser();
  //   if (signedOut) {
  //     navigate("/message");
  //   }
  // }

  return (
    <div className="bg-gray-700 p-4">
      <nav className="flex items-center justify-between">
        <a
          href="/login"
          className="text-white text-lg font-semibold hover:text-gray-300 transition duration-300 ease-in-out"
        >
          GO TO LOGIN
        </a>
        <div className="space-x-4">
          <a
            href="/register"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            REGISTER
          </a>
          <a
            href="/message"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            MESSAGE
          </a>
          <a
            href="/message/:userID"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            MESSAGE/USER
          </a>
          <Link
            as="a"
            onClick={() => signOutUser()}
            className="text-white hover:text-gray-300 transition duration-300
            ease-in-out"
          >
            {" "}
            LOGOUT
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
