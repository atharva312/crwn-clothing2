import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homapage/homepage.components';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.components';
import SignInAndSignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser : null,
    };
  };

  unsubscribefromAuth = null;

  componentDidMount(){
    this.unsubscribefromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            id:snapShot.id,
            ...snapShot.data()
          })
        });
        
        
      }
        this.setState({currentUser:userAuth});
      
    });
  }

  componentWillUnmount(){
    this.unsubscribefromAuth();
  }
  render(){
    return (
      <div >
      <Header currentUser = {this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignup} />
      </Switch>
        
      </div>
    );
  }
}

export default App;
