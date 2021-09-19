import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { Form, Input, Button, Checkbox, Typography } from "antd";

const { Title, Paragraph } = Typography;

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const LogIn = () => {
  const history = useHistory();
  
  const [identifier, setIdentifier] = useState();
  const [password, setPassword] = useState();

  // Request API.
  const onFinish = (e) => {
    const data = {
      "identifier": identifier,
      "password": password,
    }
    axios
      .post(`${backendUrl}/auth/local`, data)
      .then((res) => {
        // Handle success.
        window.localStorage.setItem("user", res.data.user);
        window.localStorage.setItem("token", res.data.jwt);
        history.push("/admin");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.message);
      });
  };

  return (
    <div className="container flex-column align-center login">
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="identifier"
          placeholder="Username..."
          onChange={e => setIdentifier(e.target.value)}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          placeholder="Password..."
          onChange={e => setPassword(e.target.value)}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LogIn;
