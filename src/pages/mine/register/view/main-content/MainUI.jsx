import React, { Component } from 'react'

import {StyledMainContainer, StyledTitle} from './StyledMainContainer'

import Input from '../input/InputUI'
import RegisterButton from '../button/RegisterButton'
import Clock from '../../../components/clock/Clock'

export default class MainContainer extends Component {
  state = {
    
  }

  render() {
    return (
      <StyledMainContainer>
        <StyledTitle>注册</StyledTitle>
          <Input msg='请输入手机号码'></Input>
          <Input msg='请输入验证码'></Input>
          <div><Input msg='请输入密码'></Input><Clock></Clock></div>
          <Input msg='请再次输入密码'></Input>
          <RegisterButton></RegisterButton>
      </StyledMainContainer>
    )
  }
}
