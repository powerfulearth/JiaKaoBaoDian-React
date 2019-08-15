import styled from 'styled-components'

import getToken from 'assets/images/mine/get-token.png'

const ClockContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    span {
      display: inline-block;
      width: .61rem;
      height: .2rem;
      text-align: center;
      line-height: .2rem;
      color: #ff5500;
      font-size: .1rem;
      background: url(${getToken}) no-repeat;
      background-size: 100% 100%;
  }
`

export {
  ClockContainer
}