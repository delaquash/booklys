import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import List from "./Pages/List";
import Hotel from "./Pages/Hotel";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotel" element={<List />} />
      <Route path="/hotel/:id" element={<Hotel />} />
    </Routes>
  );
}

export default App;
