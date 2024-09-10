import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Perfil } from "../pages/Perfil";
import { Explorar } from "../pages/Explorar";
import CriarConta from "../pages/CriarConta";

const router = createBrowserRouter([
    {
        path: "/Login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Perfil",
        element: <Perfil />,
    },
    {
        path: "/CriarConta",
        element: <CriarConta />,
    },
    {
        path: "/Explorar",
        element: <Explorar />,
    },
]);

function AppRoutes() {
    return <RouterProvider router={router} />;
}

export default AppRoutes;
