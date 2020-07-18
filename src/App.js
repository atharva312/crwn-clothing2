import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homapage/homepage.components';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.components';
import SignInAndSignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';

function App() {
  return (
    <div >
    <Header/>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/signin" component={SignInAndSignup} />
    </Switch>
      
    </div>
  );
}

export default App;
