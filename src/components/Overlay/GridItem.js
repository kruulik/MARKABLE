import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Transition } from 'react-transition-group'

import * as uiActions from 'actions/uiActions';
import * as itemActions from 'actions/itemActions';

const duration = 300;

const defaultStyle = {
  transition: `${duration}ms ease-in-out`,
  transitionProperty: 'opacity, transform'
}

const transitionStyles = {
  entering: {
    opacity: 0,
    transform: 'scale(0.1)'
  },
  entered: {
    opacity: 1,
    transform: 'scale(1)'
  },
  exiting: {
    opacity: 0,
    transform: 'scale(0.1)'
  }
}

const Thumb = ({ in: inProp, children }) => {
  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => {
        if (state === 'exited') {
          return null
        }
        return (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            {children}
          </div>
        )
      }}
    </Transition>
  )

};

class GridItem extends Component {
  constructor(props){
    super(props);
    this.state= ({
      show: false
    })
  }

  componentDidMount(){
    this.setState({show: true})
  }

  componentWillUnmount(){
    this.setState({show: false})
  }

  render() {
    const { id, image, title, price, company, classStyles } = this.props;
    const {show} = this.state;
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
