import React,{ useState, useEffect, useRef} from "react";

import Dashboard from "./dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;