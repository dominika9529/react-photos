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

function App() {
  const shouldShowLoader = useSelector(state => state.shouldShowLoader);
  return (
    <>
      {shouldShowLoader && <div>Load ...</div>}
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

// https://forms.gle/fCiPhESbnGMHWiBa8

// https://prod.liveshare.vsengsaas.visualstudio.com/join?E9B061BE9D0370BF6A39B0832F925F936E64
