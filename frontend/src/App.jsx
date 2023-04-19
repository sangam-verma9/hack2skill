import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contect from "./Contect";
import Farmer from "./Farmer";
import Customer from "./Customer";
import Footer from "./Footer";
import Login from "./Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register";
import Book from "./Book";
import Thanks from "./Thanks";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
const App = () => {
  return (
    <>
      {" "}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hack2skill" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
