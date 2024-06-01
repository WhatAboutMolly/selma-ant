import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { Link } from "react-router-dom";

const items = [
  {
    label: <Link to="/">Deconnecter</Link>,
    key: "0",
  },
  {
    label: "Parametre",
  },
];
const DropdownMenu = () => {
  const user = useSelector(selectUser);
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      {user.logged ? (
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {user.username}
            <DownOutlined />
          </Space>
        </a>
      ) : (
        <Link to="/">Login</Link>
      )}
    </Dropdown>
  );
};
export default DropdownMenu;
