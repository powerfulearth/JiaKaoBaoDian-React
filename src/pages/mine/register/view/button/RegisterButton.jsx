import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import { ButtonContainer } from './StyledButton'

import axios from 'axios'

export default class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bool: true
    }
    this.registerHandler = this.registerHandler.bind(this)
  }
  render() {
    let { bool } = this.state
    return (
      <ButtonContainer>
        <div onClick={this.registerHandler}>注 册</div> 
        <div>
          <p><i className={ bool === true ? 'yes' : 'no' } onClick={()=>{this.setState({ bool: bool? false : true })}}></i>同意用户使用协议</p>
          <span>已注册可<Link to='/mine/login'>直接登录</Link></span>
        </div> 
      </ButtonContainer>
    )
  }

  registerHandler() {
    axios({
      url: 'http://47.102.110.15:8888/jiakao/register',
      method: 'post',
      data: {
        userId: 'aaa',
        uerPassword: 'aaa'
      }
    })
  }
}
