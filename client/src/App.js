import React from 'react';
import Home from "./pages/Home";
import Character from "./pages/Character";
import Movement from "./pages/Movement";
import Battle from "./pages/Battle";
import Highscore from "./pages/Highscore";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
      <Router>
        <div>
          <Switch>
          <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/character" component={Character} />
            <Route exact path="/movement" component={Movement} />
            <Route exact path="/battle" component={Battle} />
            <Route exact path="/highscore" component={Highscore} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>

  );
}

export default App;
