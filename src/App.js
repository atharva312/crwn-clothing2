import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homapage/homepage.components';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.components';

function App() {
  return (
    <div >
    <Header/>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
      
    </div>
  );
}

export default App;
