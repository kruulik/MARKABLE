import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as uiActions from 'actions/uiActions';
import * as itemActions from 'actions/itemActions';

class GridItem extends Component {

  render() {
    const { image, title, price, company } = this.props;
    debugger
    return (
      <div className="gridItem" >
        <img src="assets/category-1-glasses/match-1.jpg"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(GridItem);
