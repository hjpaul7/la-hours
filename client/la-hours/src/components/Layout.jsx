import React from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Nav from "./Home/Nav";
import AppFooter from "./Home/Footer";

const { Header, Content, Footer, Sider } = Layout;

const LayoutNav = (props) => {
  return (
    <>
      <Layout className="mainLayout">
        <Header>
          <Nav clickLogout={props.clickLogout} />
        </Header>
        <div className="spacer"></div>
        <Content>
          <div className="container-fluid">
            <div className="content">
              <Home token={props.token} firstName={props.firstName} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <AppFooter />
        </Footer>
      </Layout>
    </>
  );
};

export default LayoutNav;
