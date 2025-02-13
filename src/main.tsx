import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Reset } from "styled-reset";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Reset />
    <App />
  </StrictMode>
);
