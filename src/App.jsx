import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sign from "./pages/sign/Sign";
import Card from "./pages/card/Card";
import Log from "./pages/log/Log";
import { categorydata, getproduct, onepro } from "./services/app";
import Wishlist from "./pages/wishlist/Wishlist";

export const Datacontext = createContext();

function App() {
  const [datacategory, setdatacategory] = useState();
  const [productdata, setproductdata] = useState();
  useEffect(() => {
    categorydata()?.then((info) => {
      setdatacategory(info);
    });
    getproduct()?.then((product) => {
      setproductdata(product);
    });
  }, []);
  console.log(datacategory);

  return (
    <BrowserRouter>
      <Datacontext value={{ datacategory, productdata,onepro }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/card" element={<Card />} />
          <Route path="/log" element={<Log />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </Datacontext>
    </BrowserRouter>
  );
}

export default App;
