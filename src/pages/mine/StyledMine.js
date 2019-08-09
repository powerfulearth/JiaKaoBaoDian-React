import styled from 'styled-components'

import Bg from 'assets/images/wsl/bg.png'

const MineContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${Bg}) no-repeat;
  background-size: 100%;

  > div:first-child {
    position: absolute;
    margin: .64rem auto 0;
    display: flex;
    flex-direction: column;
    width: calc(100% - .3rem);
    height: 1.71rem;
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

  > div:nth-child(2) {
    width: 100%;
    background: #fefefe;
    margin-top: 1.5rem;
    padding-top: .85rem;
    > .wrapper {
      padding: 0 .15rem;
      > .theory-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .21rem 0;
        border-bottom: .005rem solid #b5b5b5;
        > div:first-child {
          display: flex;
          justify-content: center;
          align-items: center;
          h4 {
            font-size: .17rem;
          }
          div {
            padding: 0 .05rem 0 .1rem;
          }
          span {
            height: .17rem;
            color: #fee83d;
            text-align: center;
            padding: 0 .02rem;
            border: .01rem solid #fee83d;
            border-radius: .04rem;
            font-size: .1rem;
          }
        }
        
        > div:last-child {
          color: #a7a7a7;
        }
      }
    
      > .theory-main {
        display: flex;
        padding: .3rem 0 .2rem;
        font-size: .13rem;
        text-align: center;
        > ul {
          flex: 1;
          display: flex;
          
          >li:first-child {
            width: 48.077%;
          }
          >li:last-child {
            width: 51.27%;   
          }

          > li{
            > span {
              font-size: .19rem;
              font-weight: 600;
            }

            > p:nth-of-type(1) {
              margin-top: .08rem;
            }

            > p:nth-of-type(2) {
              margin-top: .05rem;

              > span {
                color: #378bf8;
              }
            }
          }
         
        }

        > div:last-child {
          position: relative;
          width: 35.6521739%;
          border-left: .005rem solid #b5b5b5;
          padding-left: .28rem;

          ::before {
            content: "";
            display: inline-block;
            position: absolute;
            left: -.04rem;
            top: calc(50% - .04rem);
            width: .08rem;
            height: .08rem;
            border: .005rem solid #b5b5b5;
            border-left: transparent;
            border-bottom: transparent;
            transform: rotate(45deg);
            background: #fff;
          }

          > div {
            width: .8rem;
            height: .26rem;
            border-radius: .13rem;
            line-height: .26rem;;
            color: #fff;
            background: -webkit-linear-gradient(left,#ffd521,#ff5500);
            background: -o-linear-gradient(left,#ffd521,#ff5500);
            background: -moz-linear-gradient(left,#ffd521,#ff5500);
            background: linear-gradient(left,#ffd521,#ff5500);
          }

          > p:nth-of-type(1) {
            margin-top: .08rem;
          }

          > p:nth-of-type(2) {
            margin-top: .04rem;
          }
        }
      }
    }
    
  }

  > div:nth-of-type(3) {
    width: 100%;
    margin-top: .09rem;
    background: #fff;

    > .wrapper {
      padding: 0 .15rem;

      > .driving-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .21rem 0;
        border-bottom: .005rem solid #b5b5b5;

        > div:first-child {
          display: flex;
          justify-content: center;
          align-items: center;
          h4 {
            font-size: .17rem;
          }
          div {
            padding: 0 .05rem 0 .1rem;
          }
        }

        > div:last-child {
          color: #a7a7a7;

          span {
            margin-left: .1rem;
          }
        }

      }
    }
    
  }
`

export {
  MineContainer
}
