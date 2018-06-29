import React, { Component } from 'react';

// first we will make a new context
export const MyContext = React.createContext();

// Then create a provider Component
export default class MyProvider extends Component {
    constructor(){
        super();

        this.state = {
            name: 'Wes',
            age: 100,
            cool: true,
            instructor: 'true',
            date: '6/29',
            robotName: 'BeeBop',
            robotAge: 17,

          }
    }

  render() {
      console.log(this.state)
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 3
        })
      }}>I am the Provider.
        {this.props.children}
      </MyContext.Provider>
    )
  }
}