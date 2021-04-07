import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherprops }) => (
  // console.log(`children: ${children}`)
  <button
    className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""}`}
    {...otherprops}
  >
    {children}
  </button>
);

export default CustomButton;
