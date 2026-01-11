import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import AllProjects from "./pages/AllProjects";
import ProjectDetail from "./pages/ProjectDetails";
import Layout from "./layout/layout";

import "./index.css";

const container = document.getElementById("root");
if (!container) throw new Error("Root element not found");

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Shared layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/:projectName" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);