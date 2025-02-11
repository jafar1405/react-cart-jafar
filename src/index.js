import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios'

import Header from './header';
import Login from './components/login';
import Register from './components/register';
import Forgotpassword from './components/forgotpassword';

import Admin from './admin'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  componentDidMount(){
    axios.get('https://json-server-jafar.herokuapp.com/list')
    .then(res=> console.log(res.data))
  }

  render() {
    return (
      <div>
        
        <Router>
        <Header/>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/forgotPassword" component={Forgotpassword}/>
            <Route path="/admin" exact component={Admin}/>
          </Switch>
        </Router>

        <h1>Welcome to Site!</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
