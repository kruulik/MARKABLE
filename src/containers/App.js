import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VideoPlayer } from 'components';
import { Overlay } from 'components';

import { bindActionCreators } from 'redux';
import * as uiActions from 'actions/uiActions';


class App extends Component {

  toggleModal = () => {
    const { modal, closeModal, openModal } = this.props;
    modal ? closeModal() : openModal();
  }

  render() {
    const { modal } = this.props;

    return (
      <div id="mainContainer">
        { modal ?
          <Overlay classList={"show"} toggleModal={this.toggleModal}/>
        : null }
        <VideoPlayer handlePlayToggle={this.toggleModal} />
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...uiActions}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
