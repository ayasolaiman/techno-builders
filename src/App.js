import React from "react";
import {
  Router,
  IndexRoute,
  Route,
  HomeRoute,
  browserHistory
} from "react-router";

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
        <Router history={browserHistory}>
          <HomeRoute path="/" component={LoginPage} />
        </Router>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
