import React, { Component } from 'react'

import { StyledInputContainer } from './StyledInput'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              


import userIcon from 'assets/images/mine/user-icon.png'

export default class InputContainerUI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
      value: ''
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  render() {
    const { liked, value } = this.state
    return (
      <div>
        <StyledInputContainer>
          <img src={userIcon}></img>
          <input type="text" value={liked ? value : value || this.props.msg}
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
           />
          <p className={`'hint'+{status}`}></p>
        </StyledInputContainer>
      </div>
    )
  }

  handleFocus() {
    this.setState({
      liked: true, 
    })
  }
  handleChange(e) {
    this.setState({
      value: e.target.value 
    })
  }
  handleBlur() {
    this.setState({
      liked: false
    })
  }

}
