import { useState } from "react";
import { Button, ConfigProvider, Input, Space, theme } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "../AppLayout";
import Acceuil from "./pages/Acceuil";
import ListTaches from "./pages/ListTaches";
import InfoClients from "./pages/InfoClients";
import ChecklistPage from "./pages/ChecklistPage";
import Archives from "./pages/Archives";
import ArchiveFisc from "./pages/archives/ArchiveFisc";
import KPI from "./pages/KPI";
import InfoComptable from "./pages/infoComptable";
import Login from "./pages/Login";
import Facture from "./pages/Facture";
import DeclFisc from "./pages/DeclFisc";
import DeclParaFisc from "./pages/DeclParaFisc";
import HomePage from "./pages/Home";
import RequireAuth from "../RequireAuth";
import Clients from "./pages/Clients";
import Comptables from "./pages/Comptables";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: "#e6f4ff",
          fontFamily: "Poppins , sans-serif",
          // Seed Token
          /*colorPrimary: "#5273e0",
          fontFamily: "Poppins , sans-serif",
          //colorBgLayout: "rgb(2, 8, 23)",
          //borderRadius: 2,
          colorBgContainer: "rgb(2, 8, 23)",
          colorBgBase: "rgb(2, 8, 23)",
          colorInfoBgHover: "rgb(30, 41, 59)",
          colorPrimaryBg: "rgb(30, 41, 59)",
          colorPrimaryBgHover: "rgb(30, 41, 59)",
          colorPrimaryHover: "rgb(30, 41, 59)",
          colorFillQuaternary: "rgb(2, 8, 23)",
          colorBorderSecondary: "#fff",
          controlItemBgActive: "rgb(30, 41, 59)",
          colorBgTextHover: "rgb(30, 41, 59)",*/
        },
        //algorithm: theme.darkAlgorithm,
      }}
    >
      <Routes>
        {/* Route for the landing page */}

        <Route path="/" element={<Acceuil />} />
        <Route path="/login" element={<Login />} />

        {/* Routes for the main layout */}
        <Route element={<AppLayout />}>
          <Route
            path="/home"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route path="/comptables" element={<Comptables />} />
          <Route
            path="/list-taches/:idClt"
            element={
              <RequireAuth>
                <ListTaches />
              </RequireAuth>
            }
          />
          <Route
            path="/archives"
            element={
              <RequireAuth>
                <Archives />
              </RequireAuth>
            }
          />
          <Route path="/archives/fiscal" element={<ArchiveFisc />} />

          <Route path="/clients/info/:idClt" element={<InfoClients />} />
          <Route path="/comptable/info/:idCmp" element={<InfoComptable />} />
          <Route path="/clients/:idCompt" element={<Clients />} />
          <Route path="/clients" element={<Clients />} />

          <Route
            path="/facture"
            element={
              <RequireAuth>
                <Facture />
              </RequireAuth>
            }
          />
          <Route path="/checklist" element={<ChecklistPage />} />
          <Route
            path="/dec-fisc"
            element={
              <RequireAuth>
                <DeclFisc />
              </RequireAuth>
            }
          />
          <Route
            path="/dec-para-fisc"
            element={
              <RequireAuth>
                <DeclParaFisc />
              </RequireAuth>
            }
          />

          <Route
            path="/kpi"
            element={
              <RequireAuth>
                <KPI />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
