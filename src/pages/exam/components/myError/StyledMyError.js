import styled from 'styled-components'

const StyledMyErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  header {
    height: .44rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      line-height: .44rem;
      font-size: .18rem;
    }
    .back {
      width: .18rem;
      height: .12rem;
      position: absolute;
      left: .15rem;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  section {
    flex: 1;
    height: 100%;
    overflow: scroll;
    .errorBg {
      width: 100%;
      height: 1.89rem;
      position: relative;
      .errorNum {
        position: absolute;
        left: 1.7rem;
        top: .43rem;
        text-align: center;
        .num {
          font-size: .36rem;
          line-height: .35rem;
          color: #fff;
        }
        .text {
          font-size: .12rem;
          color: #FFFFFF;
          font-weight: 300;
        }
      }
    }
    .todayError {
      padding: .09rem 0;
      background: #f7f7f7;
      .bgWhite {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .16rem .14rem;
        background: #fff;
        .errorNum {
          display: flex;
          align-items: center;
          img {
            width: .21rem;
            height: .22rem;
          }
          .text {
            margin-left: .15rem;
            line-height: 1;
            .num {
              font-size: .15rem;
            }
            .learn {
              font-size: .12rem;
              font-weight: 300;
              margin-top: .05rem;
            }
          }
        }
        .errorBtn {
          width: .79rem;
          height: .29rem;
          border: .01rem solid #989898;
          border-radius: .15rem;
          font-size: .12rem;
          text-align: center;
          line-height: .29rem;
        }
      }
    }  
    .mastersCourse {
      padding: 0.06rem .16rem 0;
      background: #fff;
      .course {
        width: 100%;
        height: .67REM;
        background: #FFF9ED;
        border-radius: .04rem;
        display: flex;
        align-items: center;
        position: relative;
        .pic {
          width: .26rem;
          height: .21rem;
          margin-left: .15rem;
        }
        .text {
          line-height: 1;
          font-size: .12rem;
          margin-left: .15rem;
          .bottom {
            margin-top: .1rem;
            font-weight: 300;
          }
        }
        .btn {
          width: .62rem;
          height: .34rem;
          position: absolute;
          top: 0;
          right: 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .errorPractice {
      margin-top : .34rem;
      padding: 0 .15rem;
      background: #fff;
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h4 {
          font-size: .17rem;
          font-weight: 500;
        }
        .clear {
          display: flex;
          align-items: center;
          img {
            width: .12rem;
            height: .11rem;
          }
          .text {
            font-size: .12rem;
            margin-left: .05rem;
          }
        }
      }
      .notHave {
        min-height: 2.1rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .errorContent {
        display: none;
        min-height: 2.1rem;
        margin-top: .16rem;
        .errorItem {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: .01rem solid #A1A1A1;
          padding: .1rem 0;
          .text {
            font-size: .14rem;
            display: flex;
            align-items: center;
            padding-right: .2rem;
            flex: 1;
          }
          img {
            width: .06rem;
            height: .10rem;
          }
        }
      }
    }
  }
`

export {
  StyledMyErrorContainer
}