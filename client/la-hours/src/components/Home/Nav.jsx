import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Anchor, Drawer, Button } from "antd";

const { Link } = Anchor;

const Nav = (props) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="routing">
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <img
              src="https://elevenfifty.org/wp-content/uploads/2019/03/mobile-shield.png"
              alt=""
              height="25px"
              style={{ borderRadius: "50%", marginRight: "5px" }}
            />
            <a href="https://google.com">EFA</a>
          </div>
          <div className="mobileHidden">
            <Anchor targetOffset="65">
              <Link href="/" title="Home" />
              <RouterLink to="/hours">
                <Link href="#features" title="Hours" />
              </RouterLink>
              <Link href="#about" title="Invoices" />
              <Link href="#faq" title="LG" />
              <Link href="#works" title="Office" />
              <Link href="#pricing" title="Assignments" />
              <RouterLink to="/">
                <a onClick={props.clickLogout}>
                  <Link href="#" title="Logout" />
                </a>
              </RouterLink>
            </Anchor>
          </div>
          <div className="mobileVisible">
            <Button type="primary" onClick={showDrawer}>
              <i className="fas fa-bars"></i>
            </Button>
            <Drawer
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <Anchor targetOffset="65" onClick={props.clickLogout}>
                <Link href="#hero" title="Home" />
                <Link href="#features" title="Hours" />
                <Link href="#about" title="Invoices" />
                <Link href="#faq" title="LG" />
                <Link href="#works" title="Office" />
                <Link href="#pricing" title="Assignments" />
                <RouterLink to="/">
                  <a onClick={props.clickLogout}>
                    <Link href="#" title="Logout" />
                  </a>
                </RouterLink>
              </Anchor>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
