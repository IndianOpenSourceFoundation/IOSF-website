import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import BeginnerFriendly from './components/Paths/BeginnerFriendly';
import HandsOn from './components/Paths/HandsOn';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/path/beginner-friendly" component={BeginnerFriendly} />
        <Route path="/path/hands-on" component={HandsOn} />
      </Switch>
    </div>
  );
}

export default App;
