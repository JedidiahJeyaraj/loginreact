import React, { Component } from 'react';
import './App.css';

import Signin from './Components/Signin';

class App extends Component {
  state = {
    auth : false
  };
  render() {
    if(this.state.auth) {
      return (
        <div>Hello World</div>
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
