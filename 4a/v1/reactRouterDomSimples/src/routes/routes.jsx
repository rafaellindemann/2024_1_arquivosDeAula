import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Denuncias from "../pages/Denuncias";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/cadastro",
        element: <Cadastro />
    },
    {
        path: "/denuncias",
        element: <Denuncias />
    },
])

export default router;




