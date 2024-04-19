import React, { useState, useEffect } from "react";

import {
  Home,
  FolderArchive,
  CreditCard,
  FileStack,
  CalendarClock,
  Folders,
  ListChecks,
} from "lucide-react";
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./src/features/user/userSlice";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import AppRoutes from "./AppRoutes";
import Login from "./src/pages/Login";
import Facture from "./src/pages/Facture";
import DeclFisc from "./src/pages/DeclFisc";
import DeclParaFisc from "./src/pages/DeclParaFisc";
import HomePage from "./src/pages/Home";
import RequireAuth from "./RequireAuth";
import Clients from "./src/pages/Clients";
import Comptables from "./src/pages/Comptables";
import AppHeader from "./src/components/AppHeader";
import ListTaches from "./src/pages/ListTaches";
import InfoClients from "./src/pages/InfoClients";
import ChecklistPage from "./src/pages/ChecklistPage";
import Archives from "./src/pages/Archives";
import ArchiveFisc from "./src/pages/archives/ArchiveFisc";

const { Header, Content, Footer, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

let items2 = [
  { key: "0", icon: <Home size={18} />, label: <Link to="/">Home</Link> },
  {
    key: "2",
    icon: <FileStack size={18} />,
    label: <Link to="/facture">Facture</Link>,
  },
  {
    key: "3",
    icon: <CalendarClock size={18} />,
    label: <Link to="/dec-fisc">Declaration fiscale</Link>,
  },
  {
    key: "4",
    icon: <CalendarClock size={18} />,
    label: <Link to="/dec-para-fisc">Declaration para-fiscale</Link>,
  },
  {
    key: "sub",
    icon: <FileStack size={18} />,
    label: <Link to="/archives">Archive</Link>,
    children: [
      {
        key: "6",
        label: <Link to="/archives/facture">Archive Facture</Link>,
      },
      {
        key: "7",
        label: <Link to="/archives/relevBnq">Archive Relevé Bancaire</Link>,
      },
      {
        key: "8",
        label: <Link to="/archives/fiscal">Archive Fiscaux</Link>,
      },
    ],
  },
];
const AppLayout = () => {
  const [itemsMenu, setItemsMenu] = useState(items2);
  const user = useSelector(selectUser);

  useEffect(() => {
    const newItem = {
      key: "1",
      label: <Link to={`/list-taches/${user.code}`}>Liste Tache</Link>,
      icon: <ListChecks size={18} />,
    };

    console.log([...itemsMenu, newItem]);

    user.role == "C" && setItemsMenu([...itemsMenu, newItem]);
    user.role == "EC" && setItemsMenu(items2);
  }, [user.role]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <AppHeader></AppHeader>
      <Content
        style={{
          padding: "24px 48px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                border: "none",
              }}
              items={itemsMenu.sort((a, b) => Number(a.key) - Number(b.key))}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
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

              <Route path="/clients/info" element={<InfoClients />} />
              <Route path="/clients/:idCompt" element={<Clients />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/facture"
                element={
                  <RequireAuth>
                    <Facture />
                  </RequireAuth>
                }
              />
              <Route
                path="/checklist"
                element={
                  <RequireAuth>
                    <ChecklistPage />
                  </RequireAuth>
                }
              />
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
            </Routes>
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        ESGEN ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};
export default AppLayout;
