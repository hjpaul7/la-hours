import React, { useEffect, useState } from "react";
import axios from "axios";
import ViewLearningAssistants from "../View/ViewLearningAssistants";

const LAFetches = (props) => {
  const [active, setActive] = useState([]);
  const [todaySchedule, setTodaySchedule] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchActiveHours = async () => {
    try {
      const data = await axios
        .get("https://learninggym1.herokuapp.com/profile/active")
        .then((res) => {
          console.log(res.data);
          setActive(res.data);
        });
      setLoading(true);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchTodaysSchedule = async () => {
    try {
      const data = await axios
        .get("https://learninggym1.herokuapp.com/officeHours/newGetHours")
        .then((res) => {
          console.log(res.data.allDay);
          setTodaySchedule(res.data.allDay);
        });
      setLoading(true);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchActiveHours();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchTodaysSchedule();
    }, 3000);
  }, []);

  return (
    <ViewLearningAssistants
      token={props.token}
      active={active}
      todaySchedule={todaySchedule}
      loading={loading}
    />
  );
};
export default LAFetches;
