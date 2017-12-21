import React, { Component } from 'react';
import { connect } from 'react-redux';

import play from 'assets/icon-assets/video/controller-play-button.svg';
import pause from 'assets/icon-assets/video/controller-pause-button.svg';

import { DefaultPlayer as Video } from 'react-html5video';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      source: "https://github.com/kruulik/MARKABLE/blob/master/src/assets/sample_video.mp4?raw=true",
      video: null,
      progress: '0%',
      isMouseDown: false
    })
  }

  togglePlay = (e) => {
    // e.stopPropagation();
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

  componentWillReceiveProps(nextProps){
    const { video } = this.state;
    const { modalOpen } = nextProps.state.ui;
    modalOpen ? video.pause() : video.play();
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
        <video

          className="viewer"
          ref="video"
          src={this.state.source}
          onClick={this.props.handlePlayToggle}
        />

        <div className="controls">
          <div className="progress">
            <div className="fill" style={{width: this.state.progress}}></div>
          </div>
          <img src={play} onClick={() => this.togglePlay()}/>
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
