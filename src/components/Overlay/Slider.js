import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { GridItem } from 'components';

import matches from 'util/data';

import * as uiActions from 'actions/uiActions';
import * as itemActions from 'actions/itemActions';

class Slider extends Component {

  renderItems = (itemIDs) => {
    const items = matches["productDetails"];

    const gridItems = itemIDs.map(id => {

      return (
        <GridItem key={id} image={items[id].image} title={items[id].title} price={items[id].price} company={items[id].company}/>
      )
    })

    return gridItems;

  }

  render() {
    const { itemIDs } = this.props;
    return (
      <div className="slider" >
        <div className="sliderContent">
          {this.renderItems(itemIDs)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
