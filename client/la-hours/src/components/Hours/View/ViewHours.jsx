import React from "react";
import { Table, Card, Button, Row, Col, Spin } from "antd";
import { deleteHours } from "../CRUD/DeleteHours";

const ViewHours = (props) => {
  const columns = [
    { title: "Name", dataIndex: "name", key: "1", responsive: ["sm"] },
    { title: "Date", dataIndex: "date", key: "2", responsive: ["sm"] },
    { title: "Role", dataIndex: "role", key: "3", responsive: ["sm"] },
    { title: "Hours", dataIndex: "hours", key: "4", responsive: ["sm"] },
    {
      title: "Action",
      dataIndex: "",
      key: "5",
      render: (text, record) => (
        <>
          <Button
            onClick={() => {
              console.log(text);
            }}
          >
            Update
          </Button>
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "6",
      render: (text, record) => (
        <>
          <Button
            onClick={() => {
              deleteHours(text, props.token).then(() => props.fetchHours());
            }}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Row justify="center">
        {props.loading ? (
          <Card title="Your hours" size="small" style={{ width: 900 }}>
            <Table
              size="small"
              columns={columns}
              rowKey={(record) => record.id}
              expandable={{
                expandedRowRender: (record) => (
                  <p key={record.id} style={{ margin: 0 }}>
                    {record.description}
                  </p>
                ),
                rowExpandable: (record) => record.name !== "Not Expandable",
              }}
              dataSource={props.hours}
            />
          </Card>
        ) : (
          <Spin style={{ paddingBottom: "40px" }} />
        )}
      </Row>
    </>
  );
};
export default ViewHours;
