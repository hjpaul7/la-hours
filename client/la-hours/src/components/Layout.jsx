import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Nav from "./Home/Nav";
import AppFooter from "./Home/Footer";
import GetHours from "./Hours/CRUD/GetHours";

const { Header, Content, Footer } = Layout;

const LayoutNav = (props) => {
  return (
    <>
      <Router>
        <Layout className="mainLayout">
          <Header>
            <Nav clickLogout={props.clickLogout} />
          </Header>
          <div className="spacer"></div>
          <Content>
            <div className="container-fluid">
              <div className="content">
                <Switch>
                  <Route exact path="/">
                    <Home token={props.token} firstName={props.firstName} />
                  </Route>
                  <Route exact path="/hours">
                    <GetHours token={props.token} />
                  </Route>
                </Switch>
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <AppFooter />
          </Footer>
        </Layout>
      </Router>
    </>
  );
};

export default LayoutNav;
