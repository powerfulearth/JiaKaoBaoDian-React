import React, { Component } from 'react'
import { Link } from "react-router-dom";

import { LoginPhoneContainer } from './StyledLoginAccount.js'

import Clock from '../../../components/clock/Clock';

export default class LoginAccountContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bool: true,
      keyWord: '',
      phone: '',
      password: '',
      message: {
        ererror: ''
      }
    }
  }

  render() {
    let { keyWord, phone, password, bool } = this.state
    
    return (
      <LoginPhoneContainer>
        <div className="LoginContainer">
          <div>
            <input type="text"
              value={keyWord==='name' ? phone : phone || '请输入您的手机号'}
              onFocus={()=> {this.handlerFocus('name')}}
              onBlur={()=>{
                this.setState({
                  keyWord: ''
                })
              }}
              onChange={(e) => {
                this.setState({
                  phone: e.target.value.toUpperCase()
                })
              }}
            />
            <span className="hint">请输入正确的手机号</span>
          </div>
          <div>
            <i className="le"></i>
            <input type="text"
              value={keyWord==='code' ? password : password || '请输入您的验证码'}
              onFocus={()=> {this.handlerFocus('code')}}
              onBlur={()=>{
                this.setState({
                  keyWord: ''
                })
              }}
              onChange={(e) => {
                this.setState({
                  password: e.target.value.toUpperCase()
                })
              }}
            />
            <Clock onRef={this.onRef} sendMsg={this.sendMsg} /> 
            <span className="hint">验证码错误，请重新输入</span>
          </div>
        </div>
        <div>
          <p><i className={ bool === true ? 'yes' : 'no' } onClick={()=>{this.setState({ bool: bool? false : true })}}></i>同意用户使用协议</p>
          <span>忘记密码</span>
        </div>
        <div>登录</div>
        <div><span></span></div>
        <div><Link to="/mine/register">免费注册</Link></div>
      </LoginPhoneContainer>
    )
  }

  handlerFocus(keyWord) {
    this.setState({
      keyWord
    })
  }

  onRef = (ref) => {
    this.child = ref
  }

  sendMsg = (pid) => {
    const {message} = this.state
    const {dispatch, form} = this.props;
    const phone = form.getFieldValue("username");
    const phoneRegular = /^1[3456789]\d{9}$/;
    if (phone) {
      message.error('请输入正确的手机号码');
    } else if (phoneRegular.test(phone)) {
      dispatch({type: 'product/sendPhoneMsg', payload: phone, pid}).then((result) => {
        if (result) {
          this.click();
        }
      });
    } else {
      message.error('请输入有效的手机号码');
    }
  }

}
