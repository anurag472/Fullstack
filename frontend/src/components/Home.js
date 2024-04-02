import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ loggedIn }) => {
  const navigate = useNavigate()

  useEffect(() => {
    !loggedIn && navigate("/");
  })

  return (
    <div>
      <h1>Welcome to the Home component!</h1>
      <p>This is the default Home component.</p>
    </div>
  );
}

export default Home;
