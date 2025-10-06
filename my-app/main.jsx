import {createRoot} from "react-dom/client";
import App from "./src/app";
import React, { StrictMode } from "react";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <App/>
        </StrictMode>
    )

