import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <Router>
      <NavBar />
      <Heading level={1}>We now have Auth!</Heading>
      <Button onClick={signOut}>Sign Out</Button>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default withAuthenticator(App);