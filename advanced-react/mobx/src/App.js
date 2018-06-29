import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';
import Robot from './Robot';

import MyStore from './MyStore';

class App extends Component {
  
  updateData(){
    MyStore.myData = "hello";
  }
  
  resetData(){
    MyStore.myData = "hi";
  }

  render() {
    return (
      <div className="App">
        { MyStore.myData }
        <button onClick={this.updateData}>Click me to change data</button>
        <button onClick={this.resetData}>Click me to reset data</button>
      
        <Robot />
      </div>
    );
  }
}

export default observer(App);
