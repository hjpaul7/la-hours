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

const LayoutNavBackup = (props) => {
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        {/* <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ paddingTop: "60px" }}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              View hours
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraOutlined />}>
              <a href="https://learninggym-3a62e.web.app/" target="_blank">
                Learning Gym
              </a>
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
              <a href="https://elevenfiftyacademy-my.sharepoint.com/:x:/r/personal/rhyatt_elevenfifty_org/_layouts/15/Doc.aspx?sourcedoc=%7BF0DD7195-13B9-4B67-93A4-AF3774571AFB%7D&file=Learning%20Gym%20Office%20Hours.xlsx&wdOrigin=OFFICECOM-WEB.MAIN.REC&ct=1617926949006&action=default&mobileredirect=true">
                View Office Hours
              </a>
            </Menu.Item>
            <Menu.Item key="5" icon={<UploadOutlined />}>
              Download Excel
            </Menu.Item>
            <Menu.Item key="6" icon={<UserOutlined />}>
              <Link to="/learningassistants">Learning Assistants</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<UserOutlined />}>
              <a href="https://elevenfiftyacademy-my.sharepoint.com/:x:/r/personal/hcurry_elevenfifty_org/_layouts/15/Doc.aspx?sourcedoc=%7BD90C7781-6FA3-4BF3-8D35-2BEEFF2BE24B%7D&file=Instructor%20%26%20LA%20Assignments.xlsx&wdOrigin=OFFICECOM-WEB.MAIN.REC&ct=1617927015051&action=default&mobileredirect=true">
                Instructor/LA Assignments
              </a>
            </Menu.Item>
            <Menu.Item
              key="8"
              icon={<UserOutlined />}
              onClick={props.clickLogout}
            >
              Logout
            </Menu.Item>
          </Menu>
        </Sider> */}
        <Layout className="mainLayout">
          <Header>
            <Nav />
          </Header>
          {/* <Header
            className="site-layout-sub-header-background"
          /> */}
          <Content>
            {/* <Switch>
              <Route exact path="/"> */}
            <div className="container-fluid">
              <div className="content">
                <Home token={props.token} firstName={props.firstName} />
              </div>
            </div>
            {/* </Route>
            </Switch> */}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <AppFooter />
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutNavBackup;
