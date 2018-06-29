import React, { Component } from 'react';
import {MyContext} from './MyProvider'; 

export default class Person extends Component {
    
    render() {
      return (
        <div className="person">I am the Person Representational Component.
          <MyContext.Consumer>
            {(context) => (
              <React.Fragment>
                <p>Age: {context.state.age}</p>
                <p>Name: {context.state.name}</p>
                <p>instructor: {context.state.instructor}</p>
                <p>Date: {context.state.date}</p>
                <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
              </React.Fragment>
            )}
          </MyContext.Consumer>
        </div>
      )
    }
  }