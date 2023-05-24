import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Register, Schedule } from "../Components";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/schedule/:id" element={<Schedule />} />
    </Routes>

  );
};

export default Router;
