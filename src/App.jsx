import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props.questions);
    return (
      <div className="App">
        <p>Hola</p>
      </div>
    );
  }
}

function  mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);