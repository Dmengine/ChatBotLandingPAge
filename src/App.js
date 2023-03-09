import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Protected from "./components/Protected";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Protected>
            <Dashboard />
          </Protected>
        </Route>
        <Route path="/products">
          <Protected>
            <Products />
          </Protected>
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
