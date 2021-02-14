import './App.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from './components/Nav'

import GridGallery from './pages/GridGallery'
import EditPost from './pages/EditPost'
import Hashtags from './pages/Hashtags'
import Share from './pages/Share'



function App() {
  return (
    <Router >
    <div className="App">
        {/* <EditPost /> */}
        <Switch>
          <Nav>
            <Route exact path="/">
              <GridGallery />
            </Route>
            <Route exact path="/edit/:postId">
              <EditPost />
            </Route>
            <Route exact path="/hashtags">
              <Hashtags />
            </Route>
            <Route exact path="/share">
              <Share />
            </Route>
          </Nav>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
