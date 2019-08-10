import styled from 'styled-components'

import sprite from 'assets/images/wsl/sprite.png'
import Bg from 'assets/images/wsl/bg.png'

const MineContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  > div:first-child {
    position: relative;
    width: 100%;
    height: 1.3rem;
    background: url(${Bg}) no-repeat;
    background-size: 100%;
    
    > div {
      /* position: absolute; */
      z-index: 1;
      margin: .64rem auto 0;
      display: flex;
      flex-direction: column;
      width: calc(100% - .3rem);
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
    }
    
  }

  > div:nth-child(2) {
    width: 100%;
    background: #fefefe;
    padding-top: .3rem;
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
        padding: .2rem 0 .1rem;
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
    margin-top: .1rem;
    .wrapper {
      display: flex;
      flex-direction: column;
      padding: .12rem .15rem .17rem;
      background: #fff;

      ul {
        display: flex;
        justify-content: space-between;
        font-size: .12rem;

        > li {
          display: flex;
          flex-direction: column;
          align-items: center;

          i {
            width: .26rem;
            height: .28rem;
            margin-bottom: .16rem;
            background: url(${sprite}) -54px -50px no-repeat;
          }
        }

      }
      ul.row-1 {

        > li {
          margin-bottom: .18rem;
          
        }

        li:nth-child(2) i {
          background-position: -247.5px 0;
        }

        li:nth-child(3) i {
          background-position: -27px -50px;
        }

        li:nth-child(4) i {
          background-position: 0 -50px;
        }
      }

      ul.row-2 {
        li:nth-child(1) i {
          background-position: -163px -50px;
        }

        li:nth-child(2) i {
          background-position: -82px -50px;
        }

        li:nth-child(3) i {
          background-position: -135px -50px;
        }

        li:nth-child(4) i {
          background-position: -108px -50px;
        }
      }

    }
  }

  > div:nth-of-type(4) {
    width: 100%;
    > ul {
      margin-top: .15rem;
      background: #fff;

      > li {
        padding: .15rem .15rem .14rem;
        font-size: .13rem;
        color: #131313;
        display: flex;
        justify-content: space-between;
        align-items: center;

        > span {
          display: flex;
          align-items: center;
          >i {
            width: .16rem;
            height: .19rem;
            margin-right: .12rem;
            background: url(${sprite}) -32px -78px no-repeat;
          }
        }

        > i {
          width: .11rem;
          height: .11rem;
          border: .01rem solid #a1a1a1;
          border-left: none;
          border-bottom: none;
          transform: rotate(45deg)
        }
      }
    }

    .info-top {

      > li:nth-of-type(2) i {
        background-position: -49px -78px;
      }

    }

    .info-bottom {

      > li:nth-of-type(1) i {
        background-position: -67px -78px;
      }

      > li:nth-of-type(2) i {
        background-position: -83px -78px;
      }

      > li:nth-of-type(3) i {
        background-position: -99px -78px;
      }

      > li:nth-of-type(4) i {
        background-position: -117px -78px;
      }
    }
  }

  > div:nth-of-type(5) {
    > .title {
      display: flex;
      
      font-size: .15rem;
    }
  }
`

export {
  MineContainer
}
