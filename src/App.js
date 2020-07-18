import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homapage/homepage.components';

const HatsPage = () => (
  <div>
    <h1>hats page</h1>
  </div>
);

function App() {
  return (
    <div >
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </Switch>
      
    </div>
  );
}

export default App;
