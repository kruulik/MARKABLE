import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as uiActions from 'actions/uiActions';

class ProductGrid extends Component {



  render() {
    return (
      <div id="product-grid" >
        <h2>Product Grid</h2>
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
  return bindActionCreators({...uiActions}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
