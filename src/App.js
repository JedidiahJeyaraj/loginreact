import React, { Component } from 'react';
import './App.css';

import Signin from './Components/Signin';
import Main from "./Components/Main";

class App extends Component {
  state = {
    auth : false
  };

  componentDidMount() {
    let auth = sessionStorage.getItem("auth");
    this.setState({auth:auth});
  }

  render() {
    if(this.state.auth) {
      return (
        <div><Main/></div>
      );
    } else {
        return (
          <div>
            <Signin onLogin={auth => this.setState({auth})}/>
          </div>
        );
    }

  }
}

export default App;
