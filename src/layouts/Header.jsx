import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-gray-700 p-4">
      <nav className="flex items-center justify-between">
        <Link
          to="/login"
          className="text-white text-lg font-semibold hover:text-gray-300 transition duration-300 ease-in-out"
        >
          GO TO LOGIN
        </Link>
        <div className="space-x-4">
          <Link
            to="/signUp"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            REGISTER
          </Link>
          <Link
            to="/message"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            MESSAGE
          </Link>
          <Link
            to="/message/:userID"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            MESSAGE/USER
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
