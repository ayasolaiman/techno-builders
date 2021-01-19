import React, { Suspense } from "react";
//import { Router, IndexRoute, Switch } from "react-router";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./history";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

import LoginPage from "./pages/login/LoginForm";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notFound/NotFound";

import "./style.css";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <main>
        <Suspense fallback={<Loader />}>
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={LoginPage} />
              <Route path="/profile" exact component={Profile} />
              <Route path="*" component={NotFound} />
              <Redirect from="/" to="/" />
            </Switch>
          </Router>
        </Suspense>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
