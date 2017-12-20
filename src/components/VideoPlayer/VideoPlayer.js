import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { DefaultPlayer as Video } from 'react-html5video';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      source: "https://drive.google.com/uc?export=download&id=19LushkAMTxBJAqr_dwMI8ZJpQ_Rxxx57",
      video: null,
      progress: '0%',
      isMouseDown: false
    })
  }

  togglePlay = () => {
    const { video } = this.state;
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }

  handleProgress = () => {
    const { video } = this.state;
    const percent = (video.currentTime / video.duration) * 100;
    this.setState({
      progress: `${percent}%`
    });
  }

  componentDidMount() {
    this.setState({
      video: this.refs.video
    }, () => {
      ['pause', 'play'].forEach(event => {
        this.state.video.addEventListener(event, () => {
          this.forceUpdate();
        });
      });
      this.state.video.addEventListener('timeupdate', this.handleProgress);
    });
  }

  render() {
    return (
      <div className="player">
        <h1>Video Player</h1>
        <video
          className="viewer"
          ref="video"
          src={this.state.source}
          onClick={this.togglePlay}
        />

        <div className="controls">
          <div className="progress">
            <div className="fill" style={{width: this.state.progress}}></div>
          </div>
        </div>

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
