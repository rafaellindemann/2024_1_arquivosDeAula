import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Lista from "../pages/Lista";

const router = createBrowserRouter([
    { path:"/", element: <Home />},
    { path:"/cadastro", element: <Cadastro />},
    { path:"/lista", element: <Lista />},

])

export default router;