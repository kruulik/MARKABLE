import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import matches from 'util/data';

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

  renderContent = (itemID) => {
    const details = matches["productDetails"];
    return (
      <div>
        <h2>{details[itemID].company}</h2>
        <p>{details[itemID].description}</p>
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
