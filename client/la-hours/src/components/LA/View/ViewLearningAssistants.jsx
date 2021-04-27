import React from "react";
import { Row, Col, Spin, Divider } from "antd";
import LearningAssistantCard from "./LearningAssistantCard";
import TodaySchedule from "./TodaySchedule";

const ViewLearningAssistants = (props) => {
  function Active() {
    return props.loading ? (
      props.active?.map((mappedActive, index) => (
        <Col
          xs={{ span: 16 }}
          sm={{ span: 14 }}
          md={{ span: 10 }}
          lg={{ span: 8 }}
          xl={{ span: 10 }}
          xxl={{ span: 7 }}
          className="gutter-row"
        >
          <LearningAssistantCard
            active={props.active}
            mappedActive={mappedActive}
            index={index}
          />
        </Col>
      ))
    ) : (
      <Col span={24}>
        <Spin style={{ paddingBottom: "40px" }} />
      </Col>
    );
  }

  function todayIfNoActive() {
    return props.loading ? (
      <Col xl={{ span: 24 }}>
        <TodaySchedule
          todaySchedule={props.todaySchedule}
          loading={props.loading}
        />
      </Col>
    ) : (
      <Col span={24}>
        <Spin style={{ paddingBottom: "40px" }} />
      </Col>
    );
  }

  function activeTodayContainer() {
    if (props.active.length !== 0) {
      return Active();
    } else {
      return todayIfNoActive();
    }
  }
  return (
    <>
      <Col span={24}>
        {props.active.length === 0 ? (
          <Divider orientation="center" style={{ paddingBottom: "10px" }}>
            Today's Learning Gym Schedule
          </Divider>
        ) : (
          <Divider orientation="center" style={{ paddingBottom: "10px" }}>
            Available Learning Assistants
          </Divider>
        )}
      </Col>
      {activeTodayContainer()}
    </>
  );
};
export default ViewLearningAssistants;
