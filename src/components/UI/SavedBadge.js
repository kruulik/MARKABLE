import React, { Component } from 'react';
import { connect } from 'react-redux';

import matches from 'util/data';

class SavedBadge extends Component {

  constructor(props){
    super(props)
    this.state = ({
      items: []
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.saved
    })
  }

  renderBadges = (items) => {
    const details = matches["productDetails"];
    return (
      items.map((item, idx) => (
        <img style={{bottom: `${idx * 5}px`}} key={item} className="badge" src={details[item].image}/>
      )
    )
  )
}

  render() {
    const {items} = this.state;
    if (items.length === 0) {
      return null
    } else {
      return (
        <div className="saved-stack">
          { this.renderBadges(items) }
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  const {saved} = state.items
  return {
    saved
  };
};

export default connect(mapStateToProps, null)(SavedBadge);
