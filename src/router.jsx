import { createBrowserRouter } from "react-router-dom";

import Inscription from "./pages/InscriptionPage";
import CardPage from "./pages/CardPage";
import Connexion from "./pages/ConnexionPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <CardPage />,
    },
    {
        path: "/inscription",
        element: <Inscription />
    },
    {
        path: "/connexion",
        element: <Connexion />
    }
]);
export default router;