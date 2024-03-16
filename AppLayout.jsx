import React from "react";

import {
  Home,
  FolderArchive,
  CreditCard,
  FileStack,
  CalendarClock,
  Folders,
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

const { Header, Content, Footer, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
function getItem(label, key, icon, type, children) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items2 = [
  getItem(<Link to="/">Home</Link>, "1", <Home size={18} />),
  getItem(<Link to="/facture">Facture</Link>, "2", <FileStack size={18} />),
  getItem(
    <Link to="/dec-fisc">Declaration fiscale</Link>,
    "3",
    <CalendarClock size={18} />
  ),
  getItem(
    <Link to="/dec-para-fisc">Declaration para-fiscale</Link>,
    "4",
    <CalendarClock size={18} />
  ),
  getItem(<Link to="/">Etat financier</Link>, "5", <Folders size={18} />),
  getItem(<Link to="/">Archive</Link>, "6", <FolderArchive size={18} />),
  getItem(<Link to="/">Paiement</Link>, "7", <CreditCard size={18} />),
];
const AppLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const user = useSelector(selectUser);
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
              items={items2}
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
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default AppLayout;
