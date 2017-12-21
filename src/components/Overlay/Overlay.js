import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProductGrid } from 'components';
import { Sidebar } from 'components';

import * as uiActions from 'actions/uiActions';
import lightCross from 'assets/icon-assets/light-cross.svg';

class Overlay extends Component {

  render() {
    return (
      <div className={`product-modal ${this.props.classList}`} >
        
        <div className="modal-title">
          <span><h1><strong>Similar Products </strong>in Scene</h1></span>
          <img src={lightCross} onClick={this.props.toggleModal}/>
        </div>
        <ProductGrid />
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  // debugger
  // const sidebar = state.ui.sidebar
  // const activeItem = state.ui.activeItem
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...uiActions}, dispatch);
};

export default connect(null, mapDispatchToProps)(Overlay);
