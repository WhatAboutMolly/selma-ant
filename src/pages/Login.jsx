import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const users = [
  { code: "EC001", username: "EC_Selma", role: "EC" },
  { code: "EC002", username: "EC_Moukhtaria", role: "EC" },
  { code: "C001", username: "C_Lina", role: "C" },
  { code: "C002", username: "C_Amine", role: "C" },
];

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const myUser = users.filter((user) => user.username == values.username);
    console.log(myUser);
    if (myUser[0] && values.password == "password") {
      dispatch(
        UpdateUser({
          logged: true,
          role: myUser[0].role,
          username: myUser[0].username,
          code: myUser[0].code,
        })
      );
      myUser[0].role == "EC" ? navigate("/comptables") : navigate("/clients");
    }
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href=""> register now!</a>
      </Form.Item>
    </Form>
  );
};
export default Login;
