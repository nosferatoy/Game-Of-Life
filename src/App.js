import React, { Component, PropTypes} from 'react';
import logo from './logo.svg';
import Board from './board/Board';
import { connect } from 'react-redux';
import { toggleSquare } from './actions';
import { bindActionCreators } from 'redux'; 

import './App.css';

class App extends Component {

    changeColor = () => {
      console.log('t')
      return toggleSquare
      // return dispatch()
    }
  render() {
    console.log(this)
    return (
      <div className="App">
        <div className="App-header" onClick={this.changeColor}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React tessssst</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Board> </Board>
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  console.log('test')
  return { 
    	actions: bindActionCreators(toggleSquare, dispatch) 
    };
} 

export default connect( 
  null, 
    mapDispatchToProps 
)(App);
