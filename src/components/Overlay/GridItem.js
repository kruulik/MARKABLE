import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as uiActions from 'actions/uiActions';
import * as itemActions from 'actions/itemActions';

class GridItem extends Component {

  render() {
    const { image, title, price, company } = this.props;
    
    return (
      <div className="gridItem" >
        <img className="productThumb" src={image}/>
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
