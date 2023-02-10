import { createHashRouter } from "react-router-dom";
import { Typography } from "@mui/material";
import App from "./App";

export const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'home',
                element: <Typography variant="h1">Home</Typography> ,
            }
        ]
    }
]);
