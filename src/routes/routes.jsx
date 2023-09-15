import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import AppLayOut from "../layouts/Layout";
import MessagePage from "../pages/MessagePage";
import ChatLog from "../features/chat/components/ChatLog";
import { AuthProvider } from "../context/AuthProvider";

const router = createBrowserRouter([
  {
    element: (
      <AuthProvider>
        <AppLayOut />,
      </AuthProvider>
    ),
    children: [
      {
        element: <MessagePage />,
        path: "/message",
      },
      {
        element: <ChatLog />,
        path: "/message/:userId",
      },
      {
        element: <Login />,
        path: "/login",
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
