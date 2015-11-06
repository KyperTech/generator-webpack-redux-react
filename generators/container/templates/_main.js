import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../actions/<%= name %>';
import './<%= name %>.scss';

class <%= name %> extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="<%= name %>">

      </div>
    );
  }
}

export default <%= name %>
