import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleSquare } from '../actions';
import './Square.css';

class Square extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log("Square nextProps : ", nextProps)
  }

  render() {
    let bgColor = this.props.alive ? "black" : "white"
    return (
      <th className="Square" style={{ background: bgColor }} onClick={() => this.props.changeColor('t')} >  </th>
    );
  }
}

const mapDispatchToProps = (dispatch, s) => {
  return {
    changeColor: (s) => {
        dispatch(toggleSquare(s))
    }
  }
}

export default connect(null, mapDispatchToProps)(Square);
