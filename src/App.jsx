import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import MemeGenerator from "./components/MemeGenerator";
import SavedMemes from "./components/SavedMemes";
import LandingPage from "./components/LandingPage";

import "./App.css";

function App() {
  const [photo, setPhoto] = useState({ photo: 0 });
  return (
    <>
      <Router>
        <div className="app">
          <Sidebar setPhoto={setPhoto} photo={photo} />
          <main>
            <nav>
              <div className="flex-spacer" />
              {/* <Link to="/">Create</Link> */}
              <Link to="/">Saved Memes</Link>
            </nav>
            <div className="flex-spacer" />
            <Switch>
              <Route path="/meme-generator" component={MemeGenerator} />
              <Route path="/saved-memes" component={SavedMemes} />
              <Route
                path="/"
                render={props => <LandingPage {...props} photo={photo} />}
              />
            </Switch>
            <div className="flex-spacer" />
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
