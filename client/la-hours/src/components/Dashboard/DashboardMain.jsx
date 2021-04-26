import React from "react";
import { Card, Badge, Menu, Tabs, Button, Table } from "antd";
import { DollarOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const DashboardMain = (props) => {
  const columns = [
    {
      title: "Day",
      dataIndex: "day",
      key: "day",
    },
    {
      title: "Hours",
      dataIndex: "hours",
      key: "hours",
    },
  ];

  const data = [
    {
      key: "1",
      day: "Monday",
      hours: "9:00a - 1:00p",
    },
    {
      key: "2",
      day: "Tuesday",
      hours: "9:00a - 1:00p",
    },
    {
      key: "3",
      day: "Wednesday",
      hours: "9:00a - 1:00p",
    },
    {
      key: "4",
      day: "Thursday",
      hours: "9:00a - 1:00p",
    },
  ];

  function callback(key) {
    console.log(key);
  }
  return (
    <Card
      size="small"
      title={props.firstName + "'s " + "Dashboard"}
      extra={<a href="#">More</a>}
      style={{
        width: "500",
        backgroundColor: "#f8f8f8",
        boxShadow: "0 0 300px 0 lightgray",
        borderRadius: "5px",
        height: "100%",
      }}
    >
      <div style={{ textAlign: "left" }}>
        <h4 style={{ textAlign: "center" }}>
          <font color="#1890ff">Week of 04/18 - 04/24</font>
        </h4>
        <hr style={{ color: "lightgray", opacity: "0.3", width: "50%" }} />
        <ul>
          <li>
            Total Hours: <b>32</b>
          </li>
          <li>
            <font color="#1890ff">$840 </font>is on it's way!
          </li>
        </ul>
      </div>
      <div>
        <h4 style={{ textAlign: "center" }}>
          <font color="#1890ff">Your LG Schedule</font>
        </h4>
        <hr style={{ color: "lightgray", opacity: "0.3", width: "50%" }} />
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
      <br />

      <Tabs defaultActiveKey="1" size="small" onChange={callback}>
        <TabPane
          style={{ textAlign: "left" }}
          tab={
            <Badge size="small" count={1}>
              <p style={{ paddingRight: "15px" }}>Unpaid Invoices</p>
            </Badge>
          }
          key="1"
        >
          <p>Invoice 019</p>
        </TabPane>
        <TabPane
          style={{ textAlign: "left" }}
          tab={
            <Badge size="small" count={15}>
              <p style={{ paddingRight: "15px" }}>Paid Invoices</p>
            </Badge>
          }
          key="2"
        >
          <p>Invoice 018</p>
          <p>Invoice 017</p>
          <p>Invoice 016</p>
          <p>Invoice 015</p>
          <p>Invoice 014</p>
          <Button size="small">View More</Button>
        </TabPane>
      </Tabs>
    </Card>
  );
};
export default DashboardMain;
