import React from "react";
import { Table, Card } from "antd";

const columns = [
  {
    title: "Invoice Item",
    dataIndex: "invoiceItem",
  },
  {
    title: "Hourly",
    dataIndex: "hourly",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Total",
    dataIndex: "total",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

const data = [
  {
    key: "1",
    invoiceItem: "Invoice #019",
    hourly: "21",
    amount: "40",
    total: "$840",
    status: "Unpaid",
  },
  {
    key: "2",
    invoiceItem: "Invoice #018",
    hourly: "21",
    amount: "36",
    total: "$756",
    status: "Paid",
  },
  {
    key: "3",
    invoiceItem: "Invoice #017",
    hourly: "21",
    amount: "40",
    total: "$840",
    status: "Paid",
  },
];

const data_sub = [
  {
    key: "1",
    invoiceItem: "Invoice #016",
    hourly: "21",
    amount: "40",
    total: "$840",
    status: "Paid",
  },
  {
    key: "2",
    invoiceItem: "Invoice #015",
    hourly: "21",
    amount: "36",
    total: "$756",
    status: "Paid",
  },
  {
    key: "3",
    invoiceItem: "Invoice #014",
    hourly: "21",
    amount: "40",
    total: "$840",
    status: "Paid",
  },
];

const ViewInvoices = () => {
  return (
    <Card
      size="small"
      style={{
        width: "500",
        backgroundColor: "#f8f8f8",
        boxShadow: "0 0 300px 0 lightgray",
        borderRadius: "5px",
      }}
    >
      <div className="invoice-header">
        <h1 className="invoice-header-text">Unpaid Invoices: 1</h1>
      </div>
      <div className="invoice-info">
        <div style={{ fontWeight: "600" }}>
          <font color="red">Invoice #019</font>
        </div>
        <div>Submitted: 04/18/2021</div>
      </div>
      <div className="invoice-company">
        <div className="invoice-company-info">
          <span>Hustin Jeffers</span>
          <span>Eleven Fifty Academy</span>
          <span>Learning Assistant</span>
        </div>
        <div className="invoice-company-logo">
          <img
            src="https://elevenfifty.org/wp-content/uploads/2019/03/mobile-shield.png"
            width="100px"
            style={{ borderRadius: "5px" }}
          />
        </div>
      </div>

      <h2 className="invoice-month-header">April 2021</h2>

      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered={true}
        className="invoice-table"
        size="small"
      />

      <h2 className="invoice-month-header">March 2021</h2>

      <Table
        columns={columns}
        dataSource={data_sub}
        pagination={false}
        bordered={true}
        className="invoice-table"
        size="small"
      />

      <div className="invoice-total">
        <h2>Total</h2>
        <h2>$4,872</h2>
      </div>
    </Card>
  );
};
export default ViewInvoices;
