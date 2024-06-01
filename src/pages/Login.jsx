import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd/dist/antd";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { users } from "../../Data";
import { Layout } from "antd/dist/antd";
const { Content } = Layout;

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
          nom: myUser[0].nom,
        })
      );
      myUser[0].role == "EC" ? navigate("/comptables") : navigate("/clients");
    }
  };
  return (
    <div>
      <div className="content">
        <Content>
          <h2>S'authentifier</h2>
          <Form
            name="normal_login"
            title="S'authentifier"
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
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </div>
    </div>
  );
};
export default Login;
