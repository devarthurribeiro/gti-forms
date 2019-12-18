import React, { useState } from "react";
import ListForms from "./components/ListForms";

import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Router path="/">
          <ListForms />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
