import React, { useEffect } from "react";
import "./App.css";
import { NewListing } from "./Components/ListingComponents/NewListingComponent";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { UserComponent } from "./Components/UserComponent/UserComponent";
import { ListingView } from "./Components/ListingComponents/ListingViewComponent";
import { Header } from "./Components/HeaderComponent/HeaderComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./Components/HomeComponent/Home";
import { Search } from "./Components/HomeComponent/Search";
import { MyListingComponent } from "./Components/MyListingComponent/MyListingComponent";

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
            <NewListing />
          </Route>
          <Route exact path="/listing">
            <ListingView
              id="1"
              title="Title"
              price="10"
              desc="Description"
              poster="Nick"
              posted="today"
            />
          </Route>
          <Route exact path="/user">
            <UserComponent />
          </Route>
          <Route exact path="/my-listing">
            <MyListingComponent/>
          </Route>
          <Route exact path="">
            <div>
              <p>Hello</p>
            </div>
          </Route>
          <Route exact path="/home">
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