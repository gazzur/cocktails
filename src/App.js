import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './cocktailor192.png';
import './App.css';
import AppBar from './components/AppBar'
const Cocktails = lazy(() => import('./components/cocktails'))
const Details = lazy(() => import('./components/Details'))

function App() {

  return (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <AppBar />
        <header className="App-header">
          
        <Link to="/"> <img src={logo} className="App-logo" alt="logo" /></Link>
            <h1>Cocktail Time!</h1>
        </header>
        
        <Switch>
          <Route path="/details/:name" component={Details}/>
          <Route exact path="/" component={Cocktails} />
      </Switch>

      </div>
    </Suspense>
  </Router>
  );
}

export default App;
