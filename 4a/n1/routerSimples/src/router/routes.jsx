import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Estoque from "../pages/Estoque";
import Rapidao from "../pages/Rapidao";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Erro from "../components/Erro";

const router = createBrowserRouter([
    {
        path: "/", 
        element: <App />,
        errorElement: <Erro />,
        children: [
            {path: "/", element: <Home />},
            {path: "/cadastro", element: <Cadastro />},
            {path: "/estoque", element: <Estoque />},
            {path: "/rapidao", element: <Rapidao />},
        ]
    },

])
export default router;