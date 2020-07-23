import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home.js';
import Memorizenotes from './pages/Memorizenotes.js';
import Navigation from './components/Navigation.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation></Navigation>
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/memorizenotes">
          <Memorizenotes />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
