import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as uiActions from 'actions/uiActions';
import * as itemActions from 'actions/itemActions';

class ProductGrid extends Component {



  render() {
    return (
      <div id="product-grid" >

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

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
