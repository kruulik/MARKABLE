import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { DefaultPlayer as Video } from 'react-html5video';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      source: "https://drive.google.com/uc?export=download&id=19LushkAMTxBJAqr_dwMI8ZJpQ_Rxxx57"
    })
  }

  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Video 
          controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
        >
          <source src={this.state.source} type="video/mp4" />

        </Video>
      </div>

    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    state
  }
};

const mapDispatchToProps = dispatch => {

};

export default connect( mapStateToProps, null )( VideoPlayer );