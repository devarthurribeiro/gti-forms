  import React, { useState } from "react";
  import ListForms from "./components/ListForms";

  import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

  function App() {
    return (
      <Router>
        <Switch>
          <Route path="/forms">
            <ListForms />
          </Route>
          <Route path="/">
            <div className="section">
              <h1 className="title">App</h1>
              <div className="columns is-mobile">
                <div className="column">
                  <Link to="/">Home</Link>
                </div>
                <div className="column">
                  <Link to="/forms">Forms</Link>
                </div>
                <div className="column">3</div>
                <div className="column">4</div>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }

  export default App;
