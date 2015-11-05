import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class AccountDropdown extends Component {
  render() {
    return (
        <div className="buttons">
          <Link to="/profile">{this.props.currentAccount.username}</Link>
        </div>
    )
  }
}
AccountDropdown.propTypes = {
  currentAccount: PropTypes.shape({
    username: PropTypes.string.isRequired
  }).isRequired
};
export default AccountDropdown;
