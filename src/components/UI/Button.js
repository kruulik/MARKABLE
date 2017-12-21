import React, { Component } from 'react';


class Button extends Component {

  render() {
    const { handleClick, classes, children, bla} = this.props;
    return (
      <div onClick={this.props.handleClick} className={`button ${[classes ? classes : '']}`}>
        {children}
      </div>
    )

  }
}

export default Button;
