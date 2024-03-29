import React from "react";
import { useState } from "react";
import { Card, Avatar, Input, Button, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Auth.css";

const Auth = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const { Meta } = Card;

  const handleSubmit = (event) => {
    event.preventDefault();
    // OLD LOGIN/REGISTER ------ LG was updated to require LOGIN for GET fetches
    // const url = login
    //   ? "http://localhost:3000/user/login"
    //   : "http://localhost:3000/user/register";

    const url = "https://learninggym1.herokuapp.com/auth/login";

    // OLD LOGIN/REGISTER ------ Using ONLY login now to learning gym server
    // const bodyObj = login
    //   ? {
    //       email: email,
    //       password: password,
    //     }
    //   : {
    //       email: email,
    //       password: password,
    //       firstName: firstName,
    //       lastName: lastName,
    //     };

    const bodyObj = {
      email: email,
      password: password,
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
        console.log(data);
        props.updateToken(data.token);
        props.updatedFirstName(data.first);
        // console.log(data.user.firstName);
      });
    setLoading(true);
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
            prefix={<UserOutlined />}
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
            prefix={<LockOutlined />}
          />
          <br />
          <br />
          <div>
            {!loading ? (
              <Button htmlType="submit" type="primary" danger>
                {title()}
              </Button>
            ) : (
              <Spin />
            )}
          </div>
          <br />
          {authButtonToggle()}
        </form>
      </div>
    );
  };

  return (
    <div className="auth">
      <Card
        style={{ width: 500 }}
        cover={
          <img
            alt="mobile-shield"
            src="https://elevenfifty.org/wp-content/uploads/2019/03/mobile-shield.png"
          />
        }
        actions={[
          <p>Forgot Password?</p>,
          <a href="https://learninggym-3a62e.web.app/">Learning Gym</a>,
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
    </div>
  );
};

export default Auth;
