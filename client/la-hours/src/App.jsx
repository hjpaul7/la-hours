import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import Auth from "./components/Auth/Auth";
import LayoutNav from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Home/Nav";
import Test from "./components/test";

function App() {
  const [token, setToken] = useState("");
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    console.log(token);
  };

  useEffect(() => {
    if (localStorage.getItem("firstName")) {
      setFirstName(localStorage.getItem("firstName"));
    }
  }, []);

  const updatedFirstName = (newFirstName) => {
    localStorage.setItem("firstName", newFirstName);
    setFirstName(newFirstName);
    console.log(newFirstName);
  };

  const clearToken = () => {
    localStorage.clear();
    setToken("");
  };

  const protectedViews = () => {
    return (token === localStorage.getItem("token")) |
      (localStorage.getItem("token") === !undefined) ? (
      <LayoutNav token={token} clickLogout={clearToken} firstName={firstName} />
    ) : (
      <Auth updateToken={updateToken} updatedFirstName={updatedFirstName} />
    );
  };

  return (
    <div className="App">
      {protectedViews()}
      <Test />
    </div>
  );
}

export default App;
