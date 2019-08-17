import React, { Component } from 'react'

import { StyledRegisterContainer, RegisterContent } from './StyledRegister'

import Maincontainer from '../main-content/MainContainer'

export default class RegisterContainer extends Component {
  render() {
    return (
      <StyledRegisterContainer>
      <div>
        <h3>老司机</h3>
        <h4>你的驾考首选</h4>
      </div>
      <RegisterContent>
      <Maincontainer>

      </Maincontainer>
      </RegisterContent>
    </StyledRegisterContainer>
    )
  }
}
