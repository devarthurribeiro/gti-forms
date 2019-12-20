import React, { useState } from "react";
import ListForms from "./components/ListForms";
import LockScreen from "./components/LockScreen";
import ListItem from "./components/ListItem";
import MainMenu from "./components/MainMenu";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <LockScreen />
      <div className="section">
        <div className="title">GTI forms</div>
        <Switch>
          <Route path="/list">
            <ListItem />
          </Route>
          <Route path="/forms">
            <ListForms />
          </Route>
          <Route path="/">
            <MainMenu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
