import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <main>
       <Routes>
        <Route exact path="/" element={<Home />} />
       </Routes>
       </main>
    </Router>
  );
}

export default App;