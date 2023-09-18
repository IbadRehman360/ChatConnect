import { createBrowserRouter } from "react-router-dom"
import Register from "../pages/Register"
import Login from "../pages/Login"
import AppLayOut from "../AppLayOut/Layout"
import MessagePage from "../pages/MessagePage"
import ChatLog from "../features/chat/components/ChatLog"

const router = createBrowserRouter([
    {
        element: <AppLayOut />,
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
                element: <Register />,
                path: "/register",
            },
        ]
    }
])

export default router
