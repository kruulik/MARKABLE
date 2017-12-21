import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import matches from 'util/data';

import * as uiActions from 'actions/uiActions';
import * as itemActions from 'actions/itemActions';

class Sidebar extends Component {


  render() {

    return (
      <div className="sidebar-container" >
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...uiActions, ...itemActions}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
