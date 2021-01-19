import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./components/loader/Loader";
import * as LazyLoaded from "./LazyLoading";

export const Routes = (
  <Suspense fallback={<Loader />}>
    <Route>
      <Switch>
        <LazyLoaded.Login path="/" exact />
        <LazyLoaded.Login path="/profile" />
        <LazyLoaded.NotFound path="*" />
      </Switch>
    </Route>
  </Suspense>
);
