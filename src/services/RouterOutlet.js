import React, { Suspense } from "react";
import Loader from "../components/Loader/Loader";
import { Switch, Route } from "react-router-dom";

const RouterOutlet = ({ routes }) => (
    <Suspense fallback={<Loader />}>
        <Switch>
          {routes.map((route, index) => <Route key={index} {...route} />)}
        </Switch>
    </Suspense> 
);

export default RouterOutlet;