import styled from 'styled-components'

import Bg from 'assets/images/bg.png'
import userIcon from 'assets/images/user-icon.png'
import lock from 'assets/images/lock.png'
import getToken from 'assets/images/get-token.png'
import agree from 'assets/images/agree.png'
import loginBtn from 'assets/images/login-btn.png'
import wechat from 'assets/images/wechat.png'

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff url(${Bg}) no-repeat;
  background-size: 100%;
  > div:first-child {
      width: 2.66rem;
      height: .62rem;
      margin-top: .88rem;
      font-size: .21rem;
      text-align: center;
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .5rem;
    width: 3.15rem;
    height: 3.6rem;
    background: #fff;
    border-radius: .07rem;
    box-shadow: 0 .05rem .15rem #aaa,0 0 .01rem #cfcfcf inset;
  }
`
const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  > div:first-child {
    margin: .45rem 0 .05rem;  
    font-size: .16rem;
    font-weight: 800;
    color: #a7a7a7;
    > .active {
      color: #ffdf56;
    }
  }

  > div:nth-child(2) {
    margin-top: .3rem;
    text-align: center;
    width: 2.42rem;
    color: #a7a7a7;

    > div:first-child {
      position: relative;
      display: flex;
      background: url(${userIcon}) no-repeat;
      background-size: .2rem .22rem;
      padding-left: .35rem;
      margin-bottom: .275rem;
      ::after {
        content: "";
        width: calc(100% - .29rem);
        position: absolute;
        right: 0;
        bottom: 0;
        border: .005rem solid #eee;
      }

      > input {
        flex: 1;
        border: none;
        outline: none;
      }
    }
    > div:last-child {
      position: relative;
      display: flex;
      justify-content: center;
      height: .25rem;
      background: url(${lock}) no-repeat;
      background-size: .2rem .22rem;
      padding-left: .35rem;
      margin-bottom: .25rem;
      ::after {
        content: "";
        width: calc(100% - .29rem);
        position: absolute;
        right: 0;
        bottom: 0;
        border: .005rem solid #eee;
      }

      > input {
        width: calc(100% - 1.01rem);
        border: none;
        margin-right: .08rem;
        outline: none;
      }

      > span {
        width: .61rem;
        height: .2rem;
        text-align: center;
        margin-left: .1rem;
        line-height: .2rem;
        color: #ff5500;
        font-size: .1rem;
        background: url(${getToken}) no-repeat;
        background-size: 100% 100%;
      }
    }
  }

  > div:nth-child(3) {
  display: flex;
  justify-content: space-between;
  width: 2.52rem;
  height: .15rem;
  font-size: .1rem;
  color: #a7a7a7;

  i {
    display: inline-block;
    width: .125rem;
    height: .125rem;
    background: url(${agree}) no-repeat;
    background-size: 100%;
    margin: 0 .035rem 0 .012rem;
  }

  >span {
    color: #ff5500;
  }
  }

  > div:nth-child(4) {
  width: 1.7rem;
  height: .36rem;
  margin-top: .15rem;
  color: #fff;
  text-align: center;
  line-height: .36rem;
  background: url(${loginBtn}) no-repeat;
  background-size: 100%;
  border-radius: .02rem;
  }

  > div:nth-child(5) {
  width: calc(100% - .33rem);
  height: .28rem;
  margin-top: .35rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ::before {
    border: .005rem solid #a7a7a7;
    width: calc(50% - .215rem);
    content: "";
  }

  ::after {
    border: .005rem solid #a7a7a7;
    width: calc(50% - .215rem);
    content: "";
  }

  > span {
    width: .28rem;
    height: .28rem;
    background: url(${wechat}) no-repeat;
    background-size: 100%;
  }
  }

  > div:nth-child(6) {
  text-align: right;
  width: calc(100% - .4rem);
  >a {
    font-size: .1rem;
    color: #a7a7a7;
  }
  }
`


export {
  LoginContainer,
  LoginContent
}