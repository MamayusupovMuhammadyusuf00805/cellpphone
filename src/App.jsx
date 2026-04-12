import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sign from "./pages/sign/Sign";
import Card from "./pages/card/Card";
import Log from "./pages/log/Log";

function App() {
  useEffect(() => {
    fetch("https://ecommercev01.pythonanywhere.com/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка загрузки:", err);
        setLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="/log" element={<Log />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
