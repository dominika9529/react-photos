import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Sections from './Sections';
import Section from './Section';
import Photo from './Photo';
import './App.css';

function App() {
  const shouldShowLoader = useSelector(state => state.shouldShowLoader);
  return (
    <>
      {shouldShowLoader && <div>Load ...</div>}
    <div className="naglowek" >
    What's new?
    </div>
      <Router>
        <Switch>
          <Route path="/photo/:id">
            <Photo />
          </Route>
          <Route path="/section/:id">
            <Section />
          </Route>
          <Route path="/">
            <Sections />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;