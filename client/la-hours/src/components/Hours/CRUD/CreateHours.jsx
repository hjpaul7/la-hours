import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import { Form, Input, Button, DatePicker, Col } from "antd";

const CreateHours = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [role, setRole] = useState("");
  const [hours, setHours] = useState(0);
  const [description, setDescription] = useState("");

  const dateFormat = ["MM/DD/YYYY"];

  const handleSubmit = (e) => {
    // e.preventDefault();
    fetch(`http://localhost:3000/hours/create`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        date: date,
        role: role,
        hours: hours,
        description: description,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName("");
        setRole("");
        setHours();
        setDescription("");
        props.fetchHours();
      });
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      onFinish={handleSubmit}
      // initialValues={{ size: componentSize }}
      // onValuesChange={onFormLayoutChange}
      // size={componentSize as SizeType}
    >
      <Form.Item label="Name">
        <Input
          name="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Role">
        {/* <Select>
            <Select.Option name="role" value={role}>
              Instructor
            </Select.Option> */}
        {/* <Select.Option value={role}>Trainie</Select.Option> */}
        {/* <Select.Option value={role} key={role}>
              Learning Assitant
            </Select.Option>
          </Select> */}
        <Input
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </Form.Item>

      <Form.Item label="Date">
        <DatePicker
          disabledMinutes
          disabledSeconds
          name="date"
          // defaultValue={moment("01/03/2021", dateFormatList)}
          defaultValue={moment()}
          format={dateFormat}
          // value={date}
          // onChange={(e) => setDate(e.target.value)}
          onChange={(date, dateString) => setDate(date, dateString)}
        />
      </Form.Item>
      <Form.Item label="Hours">
        <Input
          name="hours"
          value={hours}
          required
          onChange={(e) => setHours(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Description">
        <Input
          name="description"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Submit">
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default CreateHours;
