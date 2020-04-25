import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import SignUpForm from './components/SignUpForm';


function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>

        <Route exact path ='/' component={SignUpForm} />

      </Switch>

    </div>
  );
}

export default App;
