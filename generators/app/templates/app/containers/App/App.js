import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import './App.scss';

import Navbar from '../Navbar/Navbar';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}

export default Main;
