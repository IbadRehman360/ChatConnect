import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Header() {
  const { signOutUser, session } = useAuth();
  const navigate = useNavigate();

  return (
    <div className=" bg-[#3b5878] p-6 ">
      <nav className="flex  items-center justify-between">
        {!session ? (
          <div className="flex justify-end flex-1  space-x-6 ">
            <a
              href="/login"
              className="text-white text-md font-semibold hover:text-gray-300 transition duration-300 ease-in-out"
            >
              GO TO LOGIN
            </a>
            <a
              href="/register"
              className="text-gray-50 text-md font-semibold hover:text-gray-300 transition duration-300 ease-in-out"
            >
              REGISTER
            </a>
          </div>
        ) : (
          <div className="space-x-4">
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
            <button
              onClick={() => signOutUser()}
              className="text-white hover:text-gray-300 transition duration-300
            ease-in-out"
            >
              LOGOUT
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
