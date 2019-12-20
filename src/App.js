import React from "react";
import ListForms from "./components/ListForms";
import LockScreen from "./components/LockScreen";
import ListItem from "./components/ListItem";
import MainMenu from "./components/MainMenu";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <div className="flex">
              <img
                src="https://image.flaticon.com/icons/png/512/1721/1721929.png"
                width="30px"
                height="40px"
                margin="8px"
                alt="logo"
              />
              <h1 className="subtitle">
                <b>GTI forms</b>
              </h1>
            </div>
          </Link>
        </div>
        <div className="navbar-menu"></div>
      </nav>
      <LockScreen />
      <div className="section">
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
