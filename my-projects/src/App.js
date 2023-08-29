// src/App.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Dashboard = lazy(() => import('./Dashboard'));

const App = () => {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </Suspense>
  </Router>
  );
};

export default App;

