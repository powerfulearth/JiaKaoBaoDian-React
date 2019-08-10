import React from 'react'

import { LoginContainer, LoginContent } from './StyledLoginContent'

export default (props) => {
  return (
    <LoginContainer>
      <div>
        <h3>老司机</h3>
        <h4>你的驾考首选</h4>
      </div>
      <div>
      <LoginContent>
        <div>
          <span>账号登录</span> | <span className="active">手机号登录</span>
        </div>
        <div>
          <div>
            <input type="text"/>
          </div>
          <div>
            <i></i>
            <input type="text"/> | <span>获取验证码</span>
          </div>
        </div>
        <div>
          <p><i></i>同意用户使用协议</p>
          <span>忘记密码</span>
        </div>
        <div>登录</div>
        <div><span></span></div>
        <div><a href="/register">免费注册</a> </div>
        </LoginContent>
      </div>
    </LoginContainer>
  )
}

