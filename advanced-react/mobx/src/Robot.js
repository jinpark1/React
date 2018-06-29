import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';


import MyStore from './MyStore';

class Robot extends Component {
  
  updateData(){
    MyStore.myData = "hello";
  }
  
  resetData(){
    MyStore.myData = "hi";
  }

  render() {
    return (
      <div className="Robot">
        {/* { MyStore.myData } */}
        { MyStore.robotName }

      </div>
    );
  }
}

export default observer(Robot);
