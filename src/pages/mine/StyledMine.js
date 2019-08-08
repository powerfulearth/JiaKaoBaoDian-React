import styled from 'styled-components'

import Bg from 'assets/images/bg.png'

const MineContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fefefe url(${Bg}) no-repeat;
  background-size: 100%;

  > div:first-child {
    display: flex;
    flex-direction: column;
    width: 92%;
    height: 1.71rem;
    margin-top: .63rem;
    padding: .19rem .14rem;
    background: #fefefe;
    border-radius: .05rem;
    box-shadow: 0 1px 10px #e3e3e3;
    > div:first-child {
      display: flex;
      > img {
        width: .55rem;
        height: .55rem;
        border-radius: 50%;
      }
      > dl {
        flex: 1;
        margin-left: .1rem;
        > dt {
          margin-top: .06rem;
          font-size: .19rem;
          color: #000;
          font-weight: 800;
        }
        > dd {
          color: #9d9d9d;
        }
      }
    }
    > div:last-child {
      display: flex;
      justify-content: space-between;
      margin-top: .2rem;
      > dl {
        width: calc((100% - .2rem) / 3);
        padding: .1rem;
        border-radius: .02rem;
        > dt {
          font-size: .13rem;
          color: #000;
          font-weight: 800;
        }
        > dd {
          color: #9d9d9d;
          font-size: .11rem;
        }
      }
    }
  }
`

export {
  MineContainer
}
