import React from "react";
import { Router, IndexRoute, Route } from "react-router";
import history from "./history";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/login/LoginForm";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <main>
        <Router history={history}>
          <Route path="/" component={LoginPage} />
        </Router>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
