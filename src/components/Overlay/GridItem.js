import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as uiActions from 'actions/uiActions';
import * as itemActions from 'actions/itemActions';

class GridItem extends Component {

  render() {
    const { image, title, price, company, classStyles } = this.props;

    return (
      <div className={`gridItem ${classStyles}`} >
        <div className="thumbContainer">
          <img className="productThumb" src={image}/>
        </div>
        <div className="info">
          <p className="title">{title}</p>
          <div className="row2">
            <span className="price">${price}</span>
            <span className="company">{company}</span>
          </div>
        </div>
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
