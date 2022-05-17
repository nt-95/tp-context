import React from "react";
import Button from "./Button";

const LogOutButton = () => {
  const handleLogOut = () => {
    sessionStorage.removeItem("token");
    window.location.reload();
  };

  return <Button onClick={() => handleLogOut()} name="Log Out" />;
};

export default LogOutButton;
