import React, { useState, useEffect } from "react";
import ModalComponent from "./ModalComponent";
import Account from "./user/Account";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [authenticated, setauthenticated] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("ACCESS_TOKEN");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div>
        <ModalComponent />
      </div>
    );
  }
};

export default Home;
