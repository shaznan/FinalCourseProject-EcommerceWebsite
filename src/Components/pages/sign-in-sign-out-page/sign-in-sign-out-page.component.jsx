import React from "react";
import "./sign-in-sign-out-page.style.scss";
import SignIn from "../../signin/signin.components";
import SignUp from "../../sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
