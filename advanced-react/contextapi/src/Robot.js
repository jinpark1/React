import React, { Component } from 'react';
import {MyContext} from './MyProvider'; 

export default class Robot extends Component {
    
    render() {
      return (
        <div className="Robot">I am the Robot Representational Component.
          <MyContext.Consumer>
            {(context) => (
              <React.Fragment>
                <p>Age: {context.state.robotAge}</p>
                <p>Name: {context.state.robotName}</p>
              </React.Fragment>
            )}
          </MyContext.Consumer>
        </div>
      )
    }
  }