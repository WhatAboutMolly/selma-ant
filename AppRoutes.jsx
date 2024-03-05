import React from "react";
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./src/pages/Home";
import Facture from "./src/pages/Facture";
import DeclFisc from "./src/pages/DeclFisc";
import DeclParaFisc from "./src/pages/DeclParaFisc";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/facture" element={<Facture />} />
      <Route path="/dec-fisc" element={<DeclFisc />} />
      <Route path="/dec-para-fisc" element={<DeclParaFisc />} />
    </Routes>
  );
}
