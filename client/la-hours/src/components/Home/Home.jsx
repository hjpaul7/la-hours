import React from "react";
import GetHours from "../Hours/CRUD/GetHours";
import LAFetches from "../LA/CRUD/LA-Fetches";
import { Row, Col } from "antd";
import DashboardMain from "../Dashboard/DashboardMain";
import CreateHours from "../Hours/CRUD/CreateHours";
import ViewInvoices from "../Invoices/View/ViewInvoices";

const Home = (props) => {
  return (
    <div className="smallestBreakpoint">
      <Row justify="center" gutter={[16, 16]}>
        {/* <Col span={5}> */}
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
          xxl={{ span: 12 }}
        >
          <DashboardMain firstName={props.firstName} />
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
        >
          <ViewInvoices />
        </Col>
      </Row>
      <Row justify="center">
        <LAFetches />
      </Row>
    </div>
  );
};
export default Home;
