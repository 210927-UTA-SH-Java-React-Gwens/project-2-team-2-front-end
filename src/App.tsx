import React from "react";
import "./App.css";
import { NewListing } from "./Components/ListingComponents/NewListingComponent/NewListingComponent";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { UserComponent } from "./Components/UserComponent/UserComponent";
import { ListingView } from "./Components/ListingComponents/ListingViewComponent/ListingViewComponent";
import { Header } from "./Components/HeaderComponent/HeaderComponent";
import { Home } from "./Components/HomeComponent/Home";
import { Search } from "./Components/HomeComponent/Search";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
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

// took this out of app div
// <GetsUser/>
