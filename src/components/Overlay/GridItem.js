import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Transition } from 'react-transition-group'

import * as uiActions from 'actions/uiActions';
import * as itemActions from 'actions/itemActions';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const Thumb = ({ in: inProp, children }) => {
  debugger
  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          {children}
        </div>
      )}
    </Transition>
  )

};

class GridItem extends Component {
  constructor(props){
    super(props);
    this.state= ({
      in: false
    })
  }

  componentDidMount(){
    this.setState({in: true})
  }

  componentWillUnmount(){
    this.setState({in: false})
  }

  render() {
    const { id, image, title, price, company, classStyles } = this.props;
    const {show} = this.state;
    // debugger
    return (
      <Thumb in={show}>

        <div className={`gridItem ${classStyles}`} >
          <div className="thumbContainer">
            <img className="productThumb" src={image}/>
          </div>
          <div className="info">
            <p className="title">{title}</p>
            <div className="row2">
              <span className="price">${price}</span>
              <span className="company">{company}</span>
            </div>
          </div>
        </div>

      </Thumb>
        )

  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...uiActions, ...itemActions}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GridItem);
