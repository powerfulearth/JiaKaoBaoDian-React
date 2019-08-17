import styled from 'styled-components'

import loginBtn from 'assets/images/mine/login-btn.png'
import Sprite from 'assets/images/mine/sprite.png'

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  div:nth-of-type(1) {
    width: 1.7rem;
    height: .35rem;
    margin-top: .27rem;
    background: url(${loginBtn});
    background-size: 100%;
    text-align: center;
    line-height: .35rem;
    color: #fff;
    font-size: .16rem;
  }

  div:nth-of-type(2) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: .11rem;
    font-size: .1rem;
    > p {
      display: flex;
      align-items:center;
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
    > span {
      Link {
        color: red;
      }
    }
    
  }
`


export {
  ButtonContainer
}