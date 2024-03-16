import React from "react";
import { Layout, Menu, Space, Flex } from "antd";
import { Link } from "react-router-dom";
import DropdownMenu from "./ui/DropdownMenu";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
const { Header } = Layout;

export default function AppHeader() {
  const user = useSelector(selectUser);
  return (
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
          <Link to="/">
            <span>Logo</span>
          </Link>
        </Menu.Item>
        {user.role == "EC" && (
          <Menu.Item>
            <Link to="/comptables">
              <span>Profils Comptables</span>
            </Link>
          </Menu.Item>
        )}
        {user.logged == true && (
          <Menu.Item>
            <Link to="/clients">
              <span>Profils Clients</span>
            </Link>
          </Menu.Item>
        )}
        <Menu.Item>
          <DropdownMenu />
        </Menu.Item>
      </Menu>
    </Header>
  );
}
