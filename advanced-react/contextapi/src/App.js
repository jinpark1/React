import React, { Component } from 'react';
import Family from './Family';
import MyProvider from './MyProvider';
import Robot from './Robot';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I am the app</p>
          <Family />
        </div>
        <div>
          <Robot />
        </div>
      </MyProvider>
    );
  }
}


export default App;