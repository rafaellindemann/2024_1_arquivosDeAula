import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Estoque from "../pages/Estoque";
import Rapidao from "../pages/Rapidao";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/", 
        element: <Home />
    },
    {path: "/cadastro", element: <Cadastro />},
    {path: "/estoque", element: <Estoque />},
    {path: "/rapidao", element: <Rapidao />},
])

export default router;