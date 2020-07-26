import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children,isGoogleSignedIn,inverted,...otherprops}) => (
  <button className={`${inverted? 'inverted': ''}${isGoogleSignedIn? 'google-sign-in': ''} custom-button`} {...otherprops}>
    {children}
  </button>
)

export default CustomButton;