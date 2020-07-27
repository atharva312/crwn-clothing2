import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';

import HomePage from './pages/homapage/homepage.components';
import ShopPage from './pages/shop/shop.components';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.components';
import SignInAndSignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';


class App extends React.Component{

  unsubscribefromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribefromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
        });
        
        
      }
        setCurrentUser(userAuth);
      
    });
  }

  componentWillUnmount(){
    this.unsubscribefromAuth();
  }
  render(){
    return (
      <div >
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/signin" 
          render = {
            () => this.props.currentUser?(<Redirect to="/" />):(<SignInAndSignup />) 
          } />
      </Switch>
        
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
