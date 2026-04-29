import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TaskCenter from "../pages/Task";
import Mine from "../pages/Mine";
import Adoption from "../pages/Adoption";
import Citymap from "../pages/Citymap";
import Cats from "../pages/Cats";
import TaskDetail from "../subpackage/taskdetail";
import CatsDetail from "../subpackage/catsdetail";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cats" element={<Cats />} />
      <Route path="/task-center" element={<TaskCenter />} />
      <Route path="/citymap" element={<Citymap />} />
      <Route path="/adoption" element={<Adoption />} />
      <Route path="/mine" element={<Mine />} />
      <Route path="/taskdetail" element={<TaskDetail />} />
      <Route path="/catsdetail" element={<CatsDetail />} />
    </Routes>
  );
};

export default AppRoutes;
