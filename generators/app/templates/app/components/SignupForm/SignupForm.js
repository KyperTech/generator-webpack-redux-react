import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as Actions from '../../actions';
// import './SignupForm.scss';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {username: '', password: ''};
  }
  /**
   * @function handleSignup
   * @description Fire onLoginClick function provided to component when login is clicked
   */
  handleSignup(event) {
    event.preventDefault();
    this.props.onLoginClick({username:this.state.username, password: this.password});
  }
  /**
   * @function handleUsernameChange
   * @description Update the state with the values from the form inputs.
   * @fires context#setState
   */
  handleInputChange(event) {
    this.setState({
      ['input']: event.target.value
    });
  }
  handlePasswordChange(event) {
    event.preventDefault();
    this.password = event.target.value;
  }
  render() {
    return (
      <div className="signup-page">
        <form className="inputs" onSubmit={this.handleSignup}>
          <div className="input-wrapper">
            <span className="input-label">Username</span>
            <input onChange={this.handleInputChange}/>
          </div>
          <div className="input-wrapper">
            <span className="input-label">Email</span>
            <input onChange={this.handleInputChange}/>
          </div>
          <div className="input-wrapper">
            <span className="input-label">Name</span>
            <input onChange={this.handleInputChange}/>
          </div>
          <div className="input-wrapper">
            <span className="input-label">Password</span>
            <input onChange={this.handlePasswordChange} type='password' />
          </div>
          <div className="input-wrapper">
            <span className="input-label">Confirm</span>
            <input onChange={this.handleInputChange} type='password'/>
          </div>
          <div className="input-wrapper">
            <button className="" type="submit">Signup</button>
            <button className="" type="reset">Cancel</button>
          </div>
       </form>
      </div>
    )
  }
}
SignupForm.propTypes = {
  onLoginClick: PropTypes.func.isRequired
};
export default SignupForm;
