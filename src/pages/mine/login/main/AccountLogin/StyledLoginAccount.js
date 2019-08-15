import styled from 'styled-components'

import Sprite from 'assets/images/mine/sprite.png'
import userIcon from 'assets/images/mine/user-icon.png'
import loginBtn from 'assets/images/mine/login-btn.png'
import wechat from 'assets/images/mine/wechat.png'

const LoginPhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  > div:nth-child(1) {
    width: 100%;
    margin-top: .3rem;
    text-align: center;
    width: 2.42rem;
    color: #a7a7a7;
    > div {
      > .hint {
        position: absolute;
        top: 100%;
        font-size: .1rem;
        color: #ff5500;
      } 
      > .hidden {
        display: none;
      }
    }
    > div:first-child {
      position: relative;
      display: flex;
      flex-direction: column;
      background: url(${userIcon}) no-repeat;
      background-size: .2rem .22rem;
      padding: 0 .8rem 0 .35rem;
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
        width: 100%;
        border: none;
        outline: none;
      }
    }
    > div:last-child {
      display: flex;
      align-items: center;

      height: .26rem;
      position: relative;
      padding: 0 .8rem 0 .35rem;
      margin-bottom: .25rem;
      ::after {
        content: "";
        width: calc(100% - .29rem);
        position: absolute;
        right: 0;
        bottom: 0;
        border: .005rem solid #eee;
      }
      > .le {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        width: .21rem;
        height: .25rem;
        background: url(${Sprite}) -190px -50px no-repeat;
      }
      input {
        width: 100%;
        height: .2rem;
        border: none;
      }
      
    }
  }

  > div:nth-child(2) {
  display: flex;
  justify-content: space-between;
  width: 2.52rem;
  height: .15rem;
  font-size: .1rem;
  color: #a7a7a7;
  > p {
    display: flex;
    justify-content: center;
    i {
      width: .125rem;
      height: .125rem;
      background: url(${Sprite}) no-repeat;
      margin: 0 .035rem 0 .012rem;
    }
    i.yes {
      background-position: -50px -35px;
    }
    i.no {
      background-position: -62px -35px;
    }
  }

  >span {
      color: #ff5500;
    }

  }

  > div:nth-child(3) {
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

  > div:nth-child(4) {
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

  > div:nth-child(5) {
  text-align: right;
  width: calc(100% - .4rem);
  >a {
    font-size: .1rem;
    color: #a7a7a7;
  }
  } 

`
export {
  LoginPhoneContainer
}