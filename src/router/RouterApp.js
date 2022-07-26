import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Inicio } from "../pages/Inicio";
import { Grafica } from "../pages/Grafica";
import { Navbar } from "../ui/Navbar";
import { Dinamica } from "../pages/Dinamica";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/grafica" element={<Grafica />} />
        <Route path="/dinamica" element={<Dinamica />} />
      </Routes>
    </BrowserRouter>
  );
};
