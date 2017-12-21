import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from 'components';

import matches from 'util/data';
import darkCross from 'assets/icon-assets/dark-cross.svg';


import * as uiActions from 'actions/uiActions';
import * as itemActions from 'actions/itemActions';

class Sidebar extends Component {

  constructor(props){
    super(props);
    this.state = ({
      open: false,
      itemID: null
    })
  }

  toggleSidebar = (id) => {
    if (id === null) {
      this.setState({
        open: false,
        itemID: null
      })
    } else {
      this.setState({
        open: true,
        itemID: id
      })
    }
  }

  handleSelect = (itemID) => {
    if (itemID) {
      this.props.saveItem(this.props.reference)
    } else {
      this.props.unSaveItem(this.props.reference)
    }
  }

  renderContent = (itemID) => {
    const details = matches["productDetails"];
    return (
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className='text'>
              <h3>{details[itemID].company}</h3>
              <p>{details[itemID].title}</p>
            </div>
            <img src={darkCross} onClick={() => this.props.selectThumb(null)}/>
          </div>
          <div className="images">
            <img src={details[itemID].image} className="large"/>
            <img src={details[itemID].image} className="small"/>
            <img src={details[itemID].image} className="small"/>
            <img src={details[itemID].image} className="small"/>
          </div>

          <div className="scroll">
            <div className="description-wrapper">
              <h3 className="price">${details[itemID].price}</h3>
              <h4>Product Features</h4>
              <p>{details[itemID].details}</p>
              <h4>Description</h4>
              <p>{details[itemID].description}</p>
            </div>
          </div>
        </div>
        <div className="buttons">
          <Button handleClick={() => console.log(itemID)} >Save For Later</Button>
          <Button handleClick={() => console.log(itemID)} classes={"primary"} >Buy</Button>
        </div>
      </div>
      )
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.activeItem ? nextProps.activeItem.props.reference : null;
    this.toggleSidebar(id);
  }

  render() {
    const { open, itemID } = this.state;

    return (
      <div className={`sidebar-container open-${open}`} >
        {this.state.open ? this.renderContent(itemID) : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const sidebar = state.ui.sidebar
  const activeItem = state.ui.activeItem
  return {
    sidebar,
    activeItem
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...uiActions, ...itemActions}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
