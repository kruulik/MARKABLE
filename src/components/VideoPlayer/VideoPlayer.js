import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = ({

    })
  }

  render() {
    return (
      <h1>Video Player</h1>
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
