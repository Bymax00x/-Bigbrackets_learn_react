import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div>
            <h1> This is redux react</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
