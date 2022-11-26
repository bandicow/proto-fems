import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import {
  Ecommerce,
  Orders,
  Employees,
  Stacked,
  Customers,
  Area,
  Bar,
  Line,
  Financial,
} from "../pages";

const Routeing = () => {
  return (
    <Routes>
      {/* Dashboard */}
      {/* 테마 적용 */}
      <Route path="/ecommerce" element={<Ecommerce />} />
      {/* Pages */}
      <Route path="/orders" element={<Orders />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/customers" element={<Customers />} />
      {/* Apps */}
      {/* Charts */}
      <Route path="/line" element={<Line />} />
      <Route path="/area" element={<Area />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/financial" element={<Financial />} />
      <Route path="/stacked" element={<Stacked />} />
    </Routes>
  );
};

export default Routeing;
