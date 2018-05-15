import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import History from './components/History';
import Home from './components/Home';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
       <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notre-histoire" component={History} />
          </Switch>
      </div>

    );
  }
}

export default App;
