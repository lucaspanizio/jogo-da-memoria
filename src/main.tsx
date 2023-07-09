import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "@/data/context/AppContext.tsx";
import { App } from "./App.tsx";
import "./globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
