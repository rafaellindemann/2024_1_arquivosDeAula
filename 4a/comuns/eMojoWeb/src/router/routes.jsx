import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Lista from "../pages/Lista";
import App from "../App";

const router = createBrowserRouter([
    { 
      path: "/",
      element: <App />,
      errorElement: <div className="container404">
        <img src="404.svg" alt="" className="img404"/>
        
      </div>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cadastro",
          element: <Cadastro />,
        },
        {
          path: "/lista",
          element: <Lista />,
        }
      ]
    }
  ])

export default router;