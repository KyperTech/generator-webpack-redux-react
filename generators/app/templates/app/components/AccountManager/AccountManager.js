import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import AccountDropdown from '../AccountDropdown/AccountDropdown';
import * as Actions from '../../actions';

class AccountManager extends Component {
  constructor(props) {
    super(props);
    // this.state.account = this.props.loadAccount.bind(this);
  }

  render() {
    if(this.props.currentAccount){
      return (<AccountDropdown currentAccount={ this.props.currentAccount } />)
    } else {
      return (<div className="buttons">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>)
    }
  }
}
AccountManager.propTypes = {
  currentAccount: PropTypes.object
}

export default AccountManager;
