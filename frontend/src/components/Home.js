import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import View from "./View";

const Home = ({ loggedIn, role }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://api.anurag47.me/home?role=${role}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    !loggedIn && navigate("/");
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={() => navigate("/")} style={{ position: "absolute", top: 0, right: 0 }}>
        Logout
      </button>
      <h1>Welcome to the Home component!</h1>
      <View data={data} />
    </div>
  );
};

export default Home;
