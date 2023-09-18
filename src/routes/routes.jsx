import { createBrowserRouter } from "react-router-dom"
import Register from "../pages/Register"
import Login from "../pages/Login"
import AppLayOut from "../AppLayOut/Layout"
import MessagePage from "../pages/MessagePage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayOut />,
        Children: [
            {
                element: <Login />,
                path: "/Login",
            },
            {
                element: <Register />,
                path: "/Register",
            },
            {
                element: <MessagePage />,
                path: "/Message",
            },

        ]
    }
]
)

export default router
