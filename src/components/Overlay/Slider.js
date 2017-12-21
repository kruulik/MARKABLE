import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { GridItem } from 'components';

import matches from 'util/data';

import * as uiActions from 'actions/uiActions';
import * as itemActions from 'actions/itemActions';

class Slider extends Component {
  constructor(props){
    super(props);
    this.state= ({
      items: null
    })
  }

  renderItems = () => {
    const { itemIDs, borderColor } = this.props;
    const items = matches["productDetails"];

    return itemIDs.map(id => (
        <GridItem
          key={id}
          reference={id}
          image={items[id].image}
          title={items[id].title}
          price={items[id].price}
          company={items[id].company}
          classStyles={borderColor}
        />
    ))
  }
  componentDidMount(){
    this.renderItems();
  }

  render() {
    return (
      <div className="slider" >
        <div className='sliderContent'>
          {this.renderItems()}
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
