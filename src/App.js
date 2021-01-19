import React from "react";
import { Router } from "react-router";
import history from "./history";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

import LoginPage from "./pages/login/LoginForm";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notFound/NotFound";

import { Routes } from "./Routers";

import "./style.css";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <main>
        <Router history={history}>{Routes}</Router>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
