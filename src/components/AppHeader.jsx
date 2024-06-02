import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import DropdownMenu from "./ui/DropdownMenu";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { DownOutlined } from "@ant-design/icons";
const { Header } = Layout;
import "./ui.css";
const menu = (
  <Menu>
    <Menu.Item key="1">
      <a href="/parameters">Parameters</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="/logout">Logout</a>
    </Menu.Item>
  </Menu>
);
export default function AppHeader() {
  const user = useSelector(selectUser);
  return (
    <Header className="header">
      <div className="logo">
        <img src="/files/logo/simplex.png" alt="Logo" />
      </div>
      <div className="menu">
        <DropdownMenu />
      </div>
    </Header>
  );
}

{
  /*<Header
      style={{
        display: "flex",
        alignItems: "center",
        padding: 0,
      }}
    >
      <div className="demo-logo" />
      <Link to="/">
        <img src="./src/assets/logo/simplex.png" id="logo" />
      </Link>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{
          minWidth: "100%",
          padding: "0 50px",
          border: "none",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Menu.Item>
          <DropdownMenu />
        </Menu.Item>
      </Menu>
    </Header>
      */
}
