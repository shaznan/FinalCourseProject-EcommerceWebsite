import "./App.css";
import HomePage from "./Components/pages/homepage.component/homepage.components";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./Components/shop/shop.components";
import Header from "./Components/Header/Header.component";
import SignInAndSignUpPage from "./Components/pages/sign-in-sign-out-page/sign-in-sign-out-page.component";
import {
  auth,
  createUserProfileDocument,
} from "./Components/firebase/firebase.utils";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
