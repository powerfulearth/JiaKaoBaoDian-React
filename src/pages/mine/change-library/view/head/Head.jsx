import React, { Component } from 'react'

import { StyledHead } from './StyledHead'

export default class Head extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return (
      <StyledHead>
        <span onClick={this.handleClick}>&lt;</span>
      </StyledHead>
    )
  }

  handleClick() {
    console.log(this.props.history);
    
    this.props.history.push('/')
  }
}
