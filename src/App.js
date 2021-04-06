import "./App.css";
import HomePage from "./Components/pages/homepage.component/homepage.components";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./Components/shop/shop.components";
import Header from "./Components/Header/Header.component";

// const HatsPage = () => {
//   return (
//     <div>
//       <h1>HATS PAGE</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
