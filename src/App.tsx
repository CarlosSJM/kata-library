import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Roman from './components/katas/roman/romanumber';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Katas Library
        </p>
        <nav className="d-flex flex-column">
          <ul className="row">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/roman">Roman</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>  
      </header>
      <Switch>
      <Route exact path="/">
            <Home />
      </Route>
      <Route exact path="/roman">
            <Roman/>
      </Route>  
      </Switch>
    </div>
    </Router>
  );
}

export default App;


function Home() {
  return <h2>Home</h2>;
}

/* function Roman(){
  return <h2>Roman</h2>
} */