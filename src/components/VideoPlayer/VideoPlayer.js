import React, { Component } from 'react';
import { connect } from 'react-redux';

import play from 'assets/icon-assets/video/controller-play-button.svg';
import pause from 'assets/icon-assets/video/controller-pause-button.svg';
import fullScreen from 'assets/icon-assets/video/icon-exit-full-screen.svg';
import sound from 'assets/icon-assets/video/volume-button.svg';
import bigPlay from 'assets/icon-assets/big-play.svg';

import { DefaultPlayer as Video } from 'react-html5video';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      source: "https://github.com/kruulik/MARKABLE/blob/master/src/assets/sample_video.mp4?raw=true",
      video: null,
      progress: '0%',
      volume: '40%',
      isMouseDown: false,
      fullScreen: false
    })
  }

  togglePlay = () => {
    const { video } = this.state;
    // const method = video.paused ? 'play' : 'pause';
    // video[method]();
    if (!video.paused) {
      video.pause();
      this.props.toggleModal();
    } else {
      video.play();
    }
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
    const {video} = this.state;
    return (
      <div className="player">

        <video
          className="viewer"
          ref="video"
          src={this.state.source}
          onClick={() => this.togglePlay()}
        />

        <img className="bigPlay" src={video && video.paused ? bigPlay : null} onClick={() => this.togglePlay()}/>

        <div className="controls">
          <div className="progress">
            <div className="fill" style={{width: this.state.progress}}></div>
          </div>
          <div className="buttons">
            <img className="play" src={video && video.paused ? play : pause} onClick={() => this.togglePlay()}/>

            <div className="volume">
              <img className="sound" src={sound} />
              <div className="scrub">
                <div className="fill" style={{width: this.state.volume}}></div>
              </div>
            </div>

            <img className="fullScreen" src={fullScreen} onClick={() => this.setState({fullScreen: !this.state.fullScreen})} />

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
