import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Denuncias from "../pages/Denuncias";
import App from "../App";
import Copicolaai from "../pages/Copicolaai";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cadastro',
                element: <Cadastro />
            },
            {
                path: '/denuncias',
                element: <Denuncias />
            },
            {
                path: '/copicola',
                element: <Copicolaai />
            },
        ]
    },
    
])

export default router;




