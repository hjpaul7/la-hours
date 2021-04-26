import React from "react";
import { useState } from "react";
import { Card, Avatar, Input, Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Auth = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  const { Meta } = Card;

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = login
      ? "http://localhost:3000/user/login"
      : "http://localhost:3000/user/register";
    const bodyObj = login
      ? {
          email: email,
          password: password,
        }
      : {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
        };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyObj),
    })
      .then((res) => res.json())
      .then((data) => {
        props.updateToken(data.token);
        props.updatedFirstName(data.user.firstName);
        // console.log(props.updatedFirstName);
        console.log(data.user.firstName);
      });
  };

  const title = () => {
    return login ? "Login" : "Signup";
  };

  const authButtonToggle = () => {
    return signupFields ? (
      <div>
        <Button type="primary" danger onClick={loginToggle}>
          Don't have an account?
        </Button>
      </div>
    ) : (
      <button>Need to Login?</button>
    );
  };

  const loginToggle = (e) => {
    e.preventDefault();
    setLogin(!login); // set login to be the opposite of its current value
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  const signupFields = () => {
    return !login ? ( // if login is false
      <div>
        <label htmlFor="firstName" style={{ fontSize: "1rem" }}>
          First Name
        </label>
        <br />
        <Input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName" style={{ fontSize: "1rem" }}>
          Last Name
        </label>
        <br />
        <Input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
    ) : null;
  };

  const authForm = () => {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          {signupFields()}
          <label
            htmlFor="email"
            style={{ fontSize: "1rem", paddingRight: "1rem" }}
          >
            Email:
          </label>
          {/* <br /> */}
          <Input
            type="text"
            id="email"
            value={email}
            placeholder="email@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password" style={{ fontSize: "1rem" }}>
            Password:
          </label>
          <br />
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <div>
            <Button htmlType="submit" type="primary" danger>
              {title()}
            </Button>
          </div>
          <br />
          {/* <button onClick={loginToggle}>{authTitleToggle()}</button> */}
          {authButtonToggle()}
        </form>
      </div>
    );
  };

  return (
    <header className="App-header">
      <Card
        style={{ width: 600 }}
        cover={
          <img
            alt="mobile-shield"
            src="https://elevenfifty.org/wp-content/uploads/2019/03/mobile-shield.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={title()}
          description={authForm()}
        />
      </Card>
    </header>
  );
};

export default Auth;
