import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./style.css";

export default function App() {
  return (
    <div class="container">
      <div class="header">
        <Header />
      </div>
      <main />
      <div class="footer">
        <Footer />
      </div>
    </div>
  );
}
