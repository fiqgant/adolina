import React from "react";
import { useSelector } from "react-redux";
import Tabs from "./TabApi";

const Api = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <Tabs />
    </div>
  );
};

export default Api;