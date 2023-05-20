import { createBrowserRouter } from "react-router-dom";

import Inscription from "./pages/InscriptionPage";
import CardPage from "./pages/CardPage";
import Connexion from "./pages/ConnexionPage";
import CoffrePage from "./pages/CoffrePage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Connexion />,
    },
    {
        path: "/inscription",
        element: <Inscription />
    },
    {
        path: "/card",
        element: <CardPage />
    },
    {
        path:"/coffre",
        element: <CoffrePage />
    }
]);
export default router;