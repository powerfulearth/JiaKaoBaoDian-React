import React, { Component } from 'react'

import { ClockContainer } from './StyledClock.jsx'

export default class Clock extends Component {
  render() {
    return (
      <ClockContainer>| <span>获取验证码</span></ClockContainer>
    )
  }
}
