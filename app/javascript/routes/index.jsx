import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Instructions from "../components/Instructions";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Instructions />} />
    </Routes>
  </Router>
);
