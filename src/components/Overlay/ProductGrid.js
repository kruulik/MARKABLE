import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Slider } from 'components';

import matches from 'util/data';

import * as uiActions from 'actions/uiActions';
import * as itemActions from 'actions/itemActions';

class ProductGrid extends Component {

  renderRows = () => {
    const rows = matches["categories"];

    const items = rows.map(row => {

      return (
        <div className="row" key={row.name}>
          {/* <h2 className="rowHeader">{row.name}</h2> */}
          <Slider itemIDs={row.matchIDs} borderColor={row.color}/>
        </div>
      )
    })
    return items;
  }

  render() {

    return (
      <div id="product-grid" >
        {this.renderRows()}

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
