import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ViewHours from "../View/ViewHours";

const GetHours = (props) => {
  const [hours, setHours] = useState([]);

  const fetchHours = async () => {
    try {
      const data = await axios
        .get("http://localhost:3000/hours/", {
          headers: {
            Authorization: props.token,
          },
        })
        .then((res) => {
          console.log(res.data);
          setHours(res.data);
        });
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchHours();
  }, []);

  return (
    <ViewHours token={props.token} fetchHours={fetchHours} hours={hours} />
  );
};
export default GetHours;
