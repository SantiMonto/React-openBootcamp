import React from "react";
import { Link } from "react-router-dom";

const Home = ({ loggedIn }) => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
      <br />
      <Link to={loggedIn ? "/contacts" : "/"}>Contacts</Link>
      <br />
      <Link to="/request">Axios Request</Link>
    </div>
  );
};

export default Home;
