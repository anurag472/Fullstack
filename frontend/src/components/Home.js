import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = ({ loggedIn, role }) => {
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/home?role=${role}`);
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
      <h1>Welcome to the Home component!</h1>
      <p>This is the default Home component.</p>
    </div>
  );
};

export default Home;
