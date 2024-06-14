import { createBrowserRouter } from "react-router-dom";
import Home from "./frontend/pages/home";
import Error from './frontend/pages/error';
import Bookmark from './frontend/pages/bookMark';
import HistoryBooks from "./frontend/pages/historyBooks";
import LanguagesBooks from "./frontend/pages/languagesBooks";
import SciencesBooks from "./frontend/pages/schiencesBooks";

import StudentReadingList from "./frontend/pages/readingList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/readingList",
        element: <StudentReadingList />,
        errorElement: <Error />,
    },
    {
        path: "/scienceBooks",
        element: <SciencesBooks />,
        errorElement: <Error />,
    },
    {
        path: "/historyBooks",
        element: <HistoryBooks />,
        errorElement: <Error />,
    },
    {
        path: "/languages",
        element: <LanguagesBooks />,
        errorElement: <Error />,
    },
]);