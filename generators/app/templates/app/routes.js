import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router'
import { ReduxRouter } from 'redux-router';
// import Main from './components/Main';
// import Login from './components/Login';
// import {
//     App,
//     Home,
//     About,
//     Login,
//     RequireLogin,
//     LoginSuccess,
//     NotFound,
//   } from 'containers';
import App from './containers/App/App.js';
import Home from './containers/Home/Home.js';
import About from './containers/About/About.js';
import Profile from './containers/Profile/Profile.js';
import Login from './containers/Login/Login.js';
import Signup from './containers/Signup/Signup.js';
import RequireLogin from './containers/RequireLogin/RequireLogin.js';
import LoginSuccess from './containers/LoginSuccess/LoginSuccess.js';
import NotFound from './containers/NotFound/NotFound.js';

export default class AppRouter extends Component {
  render() {
    return (
      <ReduxRouter>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home } />
          <Route path="login" component={ Login }/>
          <Route path="signup" component={ Signup }/>
          <Route path="about" component={ About } />
          <Route path="profile" component={ Profile } />
          <Route path="*" component={ NotFound } />
        </Route>
      </ReduxRouter>
    )
  }
}
