import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import AppLayOut from "../layouts/Layout";
import MessagePage from "../pages/MessagePage";
import ChatLog from "../features/chat/components/ChatLog";
import { AuthProvider } from "../context/AuthProvider";
import ProtectedRoute from "../context/ProtectedRoute";

const router = createBrowserRouter([
  {
    element: (
      <AuthProvider>
        <AppLayOut />
      </AuthProvider>
    ),
    children: [
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        element: (
          <ProtectedRoute>
            <MessagePage />,
          </ProtectedRoute>
        ),
        path: "/message",
      },
      {
        element: (
          <ProtectedRoute>
            <ChatLog />,
          </ProtectedRoute>
        ),
        path: "/message/:userId",
      },
    ],
  },
]);

export default router;
