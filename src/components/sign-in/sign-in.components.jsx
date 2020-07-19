import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
  constructor(){
    super();

    this.state = {
      email:"",
      password:"",
    }
  }
  handleSubmit = event =>{
    event.preventDefault();
    this.setState({email:"",password:""});

  }
  handleChange = event => {
    const {value,name} = event.target;

    this.setState({[name]:value})
  }

  render(){
    return(
      <div className="sign-in">
        <h2>i already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="email" 
            name="email" 
            value={this.state.email} 
            handleChange = {this.handleChange}
            label="email"
            required />
        
          <FormInput 
            type="password" 
            name="password" 
            value={this.state.password} 
            label="password"
            handleChange = {this.handleChange}
            required />
          
          <div className="buttons">
            <CustomButton type="submit"> Sign in</CustomButton>
            <CustomButton onClick = {signInWithGoogle} isGoogleSignedIn> Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;