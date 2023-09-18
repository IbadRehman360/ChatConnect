import { createBrowserRouter } from "react-router-dom"

function routes() {
    const routes = createBrowserRouter({
        {
            element: <AppLayOut />,
            path: "/"
        },
    })
}

export default routes
