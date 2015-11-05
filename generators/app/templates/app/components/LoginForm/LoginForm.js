import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as Actions from '../../actions';
import './LoginForm.scss';

 class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {username: '', password: ''};
  }
  /**
   * @function handleLogin
   * @description Fire onLoginClick function provided to component when login is clicked
   */
  handleLogin(event) {
    event.preventDefault();
    this.props.onLoginClick({username:this.state.username, password: this.password});
  }
  /**
   * @function handleUsernameChange
   * @description Update the state with the values from the form inputs.
   * @fires context#setState
   */
  handleUsernameChange(event) {
    this.setState({
      ['username']: event.target.value
    });
  }
  handlePasswordChange(event) {
    this.password = event.target.value;
  }
  render() {
    return (
      <div className="login-page">
        <form className="inputs" onSubmit={this.handleLogin}>
          <div className="input-wrapper">
            <span className="input-label">Username/Email</span>
            <input onChange={this.handleUsernameChange}/>
          </div>
          <div className="input-wrapper">
            <span className="input-label">Password</span>
            <input onChange={this.handlePasswordChange} type='password' />
          </div>
          <div className="input-wrapper">
            <button className="" type="submit">Login</button>
            <button className="" type="reset">Cancel</button>
          </div>
       </form>
      </div>
    )
  }
}
LoginForm.propTypes = {
  onLoginClick: PropTypes.func.isRequired
};
export default LoginForm;
