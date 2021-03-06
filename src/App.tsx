import React, { useEffect } from "react";
import "./App.css";
import { ListingEditor } from "./Components/ListingComponents/ListingEditorComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserComponent } from "./Components/UserComponent/UserComponent";
import { ListingView } from "./Components/ListingComponents/ListingViewComponent";
import { Header } from "./Components/HeaderComponent/HeaderComponent";
import { Home } from "./Components/HomeComponent/Home";
import { MyListings } from "./Components/MyListingsComponent/MyListingsComponent";
import 'bootstrap/dist/css/bootstrap.min.css';



import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { VerifyAccountComponent } from "./Components/VerifyAccountComponent/VerifyAcountComponent";
import { SessionManager } from "./Components/SessionManager/SessionManager";
import { Conversations } from "./Components/MessageComponents/Conversations";
import { MessageContainer } from "./Components/MessageComponents/MessageContainer";

function App() {
  useEffect(() => {
    document.title = "GWENslist";
  });

  return (
    <div className="App">
      <Router>
      <SessionManager/>
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
            <MyListings />
          </Route>
          <Route exact path="/activation-page">
            <VerifyAccountComponent/>
          </Route>
          <Route exact path="/message">
            <Conversations/>
          </Route>
          <Route exact path="">
            <Home/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;