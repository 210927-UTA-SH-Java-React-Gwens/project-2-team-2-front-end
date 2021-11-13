import React, { useEffect } from "react";
import "./App.css";
import { ListingEditor } from "./Components/ListingComponents/ListingEditorComponent";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { UserComponent } from "./Components/UserComponent/UserComponent";
import { ListingView } from "./Components/ListingComponents/ListingViewComponent";
import { Header } from "./Components/HeaderComponent/HeaderComponent";
import { Home } from "./Components/HomeComponent/Home";
import { Search } from "./Components/HomeComponent/Search";
import { MyListingComponent } from "./Components/MyListingComponent/MyListingComponent";
import 'bootstrap/dist/css/bootstrap.min.css';



import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { VerifyAccountComponent } from "./Components/VerifyAccountComponent/VerifyAcountComponent";

function App() {
  useEffect(() => {
    document.title = "GWENslist";
  });

  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/create-listing">
            <ListingEditor />
          </Route>
          <Route exact path="/listing">
            <ListingView/>
          </Route>
          <Route exact path="/user">
            <UserComponent />
          </Route>
          <Route exact path="/my-listing">
            <MyListingComponent/>
          </Route>
          <Route exact path="/activation-page">
            <VerifyAccountComponent/>
          </Route>
          <Route exact path="">
            <Home/>
          </Route>
          <Route exact path="/search">
            <Search/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;