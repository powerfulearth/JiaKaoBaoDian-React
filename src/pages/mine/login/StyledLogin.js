import styled from 'styled-components';

import Bg from 'assets/images/mine/bg.png'

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

export {
  LoginContainer
}