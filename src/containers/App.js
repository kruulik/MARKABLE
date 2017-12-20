import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VideoPlayer } from '../components';
import { ProductGrid } from '../components';

class App extends Component {


  render() {
    const { modal } = this.props;

    return (
      <div id="mainContainer">
        { modal ? <ProductGrid /> : null }
        <VideoPlayer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const modal = state.ui.modalOpen
  return {
    state,
    modal
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//   };
// };

export default connect(mapStateToProps, null)(App);
