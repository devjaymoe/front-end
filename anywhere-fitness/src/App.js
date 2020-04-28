import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Navigation from "./components/Navigation";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import Classes from './components/Classes';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path='/classes' component={Classes} />
        <Route path="/register" component={SignUpForm} />
        <Route exact path="/" component={LoginForm} />
      </Switch>
    </div>
  );
}
export default App;
