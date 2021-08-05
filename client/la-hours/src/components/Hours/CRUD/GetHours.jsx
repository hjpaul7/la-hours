import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ViewHours from "../View/ViewHours";
import APIURL from "../../../helpers/environment";

const GetHours = (props) => {
  const [hours, setHours] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHours = async () => {
    try {
      const data = await axios
        .get(`http://localhost:3000/hours/`, {
          headers: {
            Authorization: props.token,
          },
        })
        .then((res) => {
          console.log(res.data);
          setHours(res.data);
        });
      setLoading(true);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchHours();
  }, []);

  return (
    <ViewHours
      token={props.token}
      fetchHours={fetchHours}
      hours={hours}
      loading={loading}
    />
  );
};
export default GetHours;
