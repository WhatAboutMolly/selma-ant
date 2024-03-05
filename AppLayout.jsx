import React from "react";

import {
  Home,
  FolderArchive,
  CreditCard,
  FileStack,
  CalendarClock,
  Folders,
} from "lucide-react";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import AppRoutes from "./AppRoutes";
import { Link } from "react-router-dom";
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
  getItem(
    <a href="https://ant.design" target="_blank">
      Navigation Four - Link
    </a>,
    "1",
    <Home size={18} />
  ),
  getItem("Facture", "2", <FileStack size={18} />),
  getItem("Declaration fiscale", "3", <CalendarClock size={18} />),
  getItem("Declaration para-fiscale", "4", <CalendarClock size={18} />),
  getItem("Etat financier", "5", <Folders size={18} />),
  getItem("Archive", "6", <FolderArchive size={18} />),
  getItem("Paiement", "7", <CreditCard size={18} />),
];
const AppLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          padding: 0,
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{
            flex: 1,
            minWidth: 0,
            padding: "0 50px",
            border: "none",
          }}
        >
          <Menu.Item>
            <span className="nav-text">Login</span>
          </Menu.Item>
          <a>
            <Menu.Item>
              <span className="nav-text">Register</span>
            </Menu.Item>
          </a>
        </Menu>
      </Header>
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
            <AppRoutes />
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
