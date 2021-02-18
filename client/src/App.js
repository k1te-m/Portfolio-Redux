import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./features/landing/Landing";
import Alert from "./features/alert/Alert";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Alert />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
