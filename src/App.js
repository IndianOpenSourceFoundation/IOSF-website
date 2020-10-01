import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Hacktober from './components/Hacktober/Hacktober';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hacktober" component={Hacktober} />
      </Switch>
    </div>
  );
}

export default App;
