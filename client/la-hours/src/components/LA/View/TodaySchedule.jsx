import React, { useState, useEffect } from "react";
import { Table, Spin } from "antd";

const TodaySchedule = (props) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "instructorName",
      key: "instructorName",
    },
    {
      title: "Class",
      dataIndex: "mainSkill",
      key: "mainSkill",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={props.todaySchedule}
        size="medium"
      />
    </>
  );
};
export default TodaySchedule;
