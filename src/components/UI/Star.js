import React, { Component } from 'react';
import { connect } from 'react-redux';

import clicked from 'assets/icon-assets/save-clicked.svg';
import hover from 'assets/icon-assets/save-hover.svg';
import idle from 'assets/icon-assets/save-idol.svg';


class Star extends Component {
  constructor(props){
    super(props);
    this.state = ({
      selected: false,
      source: idle,
      vis: 'hidden',
    })
  }


  handleClick = () => {
    const { selected } = this.state;
    this.setState({
      selected: !this.state.selected,
      source: [this.state.selected ? hover : clicked]
    });
    // debugger
    this.props.onSelect(!selected);
  }

  mouseOver = () => {
    if (!this.state.selected) {
      this.setState({
        source: hover
      })
    }
  }

  mouseOut = () => {
    if (!this.state.selected) {

    this.setState({
      source: idle
    })
  }
  }

  componentWillReceiveProps(nextProps) {
    if ( !this.state.selected ) {
      this.setState({
        vis: [nextProps.mouse ? 'visible' : 'hidden']
      })
    }
  }



  render() {
    const { mouse, onSelect } = this.props;
    const { source, vis } = this.state;

    return (
      <div
        className="save-icon"
        onMouseOver={() => this.mouseOver()}
        onMouseOut={() => this.mouseOut()}
        onClick={() => this.handleClick()}
      >
        <img src={source} style={{visibility: `${vis}` }}/>
      </div>
    )

  }
}

export default Star;
