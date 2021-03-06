import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Welcome from './components/Welcome';
import Login from './components/Login';
import CheckWeather from './components/CheckWeather';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
          <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/login" component={Login} />
              <Route  exact path="/check-weather" component={CheckWeather} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
