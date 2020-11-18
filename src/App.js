import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import Display from "./Containers/Display/Display";
import Home from "./Containers/Home/Home";

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/display" exact component={Display} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
