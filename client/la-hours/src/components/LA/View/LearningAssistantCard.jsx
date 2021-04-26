import React from "react";
import { Card, Image, Col } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const LearningAssistantCard = (props) => {
  return (
    <Card
      key={props.index}
      style={{ width: 300, marginBottom: "40px" }}
      cover={
        <Image
          src={`data:image/png;base64,${props.mappedActive?.picture}`}
          style={{ width: "100%", height: "10vw", objectFit: "cover" }}
        />
      }
      actions={[
        <a href={props.mappedActive.zoomLink} target="_blank">
          <img
            src="http://assets.stickpng.com/images/5e8ce318664eae0004085461.png"
            alt="zoom"
            style={{ width: "20px", height: "20px" }}
          />
        </a>,
        // <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        title={props.mappedActive?.name}
        description={props.mappedActive?.skills}
      />
    </Card>
  );
};
export default LearningAssistantCard;
