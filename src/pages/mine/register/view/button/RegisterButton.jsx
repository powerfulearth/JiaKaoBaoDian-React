import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import { ButtonContainer } from './StyledButton'

export default class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bool: true
    }
  }
  render() {
    let { bool } = this.state
    return (
      <ButtonContainer>
        <div>注 册</div> 
        <div>
          <p><i className={ bool === true ? 'yes' : 'no' } onClick={()=>{this.setState({ bool: bool? false : true })}}></i>同意用户使用协议</p>
          <span>已注册可<Link to='/mine/login'>直接登录</Link></span>
        </div> 
      </ButtonContainer>
    )
  }
}
