import React from "react";
import "./App.css";
import { NewListing } from "./Components/ListingComponents/NewListingComponent/NewListingComponent";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { UserComponent } from "./Components/UserComponent/UserComponent";
import { ListingView } from "./Components/ListingComponents/ListingViewComponent/ListingViewComponent";
import { Header } from "./Components/HeaderComponent/HeaderComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/new-listing">
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
          <Route exact path="">
            <div>
              <p>Hello</p>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// took this out of app div
// <GetsUser/>
