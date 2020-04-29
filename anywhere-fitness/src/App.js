import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import Classes from "./components/Classes";
import CreateClass from "./components/CreateClass";
import DetailedClassCard from './components/DetailedClassCard';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/createclass" component={CreateClass} />
        <Route path='/class-details/:id' component={DetailedClassCard} />
        <Route path='/classes' component={Classes} />
        <Route path="/register" component={SignUpForm} />
        <Route exact path="/" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
