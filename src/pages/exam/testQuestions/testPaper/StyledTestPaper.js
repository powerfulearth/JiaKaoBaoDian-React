import styled from 'styled-components'

const collect = require('assets/images/exam/test/star.png')

const right = require('assets/images/exam/test/true.png')
const error = require('assets/images/exam/test/false.png')
const right_big = require('assets/images/exam/test/true_big.png')
const error_big = require('assets/images/exam/test/false_big.png')
const menu = require('assets/images/exam/test/menu.png')

const StyledTestPaper = styled.div`
  flex: 1;
  overflow: hidden;
  .container {
    height: 100%;
    overflow: hidden;
    .container_scroll {
      padding: .24rem 0;
      box-sizing: border-box;
      .testTitle {
        padding: 0 .15rem;
        .testType {
          display: block;
          width: .48rem;
          height: .22rem;
          border: 1px #1DACF9 solid;
          border-radius: .02rem;
          font-size: .13rem;
          color: #1DACF9;
          line-height: .22rem;
          text-align: center;
          margin-right: .15rem;
          float: left;
          margin-top: .03rem;
        }
        .testText {
          font-size: .18rem;
          line-height: 1.7;
          i {
            color: #FE4648;
            font-weight: bold;
          }
        }
      }
      .picture {
        padding: 0 .3rem;
        margin-top: .17rem;
        height: 1.7rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .options {
        margin-top: .25rem;
        padding: 0 .25rem;
        .row {
          display: flex;
          align-items: center;
          margin-bottom: .29rem;
          .letter {
            width: .27rem;
            height: .27rem;
            border-radius: 50%;
            border: .01rem solid #DEDEDE;
            text-align: center;
            line-height: .25rem;
            font-size: .15rem;
            margin-right: .16rem;
          }
          .true {
            width: .27rem;
            height: .27rem;
            border-radius: 50%;
            background: red;
            margin-right: .16rem;
          }
          .false {
            width: .27rem;
            height: .27rem;
            border-radius: 50%;
            background: black;
            margin-right: .16rem;
          }
          .content {
            font-size: .18rem;
          }
        }
        .row:last-child {
          margin-bottom: 0;
        }
      }
      .error {
        margin-top: .15rem;
        padding: 0 .25rem;
        .answer {
          width: 100%;
          height: .3rem;
          background: rgba(29,172,249,0.2);
          display: flex;
          align-items: center;
          justify-content: space-between;
          .answer_option {
            font-size: .13rem;
            margin-left: .11rem;
            i {
              margin-left: .11rem;
              color: #1DACF9;
            }
          }
          .reportError {
            font-size: .11rem;
            color: #1DACF9;
            margin-right: .51rem;
          }
        }
        .detail {
          margin-top: .15rem;
          font-size: .13rem;
          .detail_title {
            line-height: 1;
          }
          .detail_content {
            line-height: .16rem;
            margin-top: .1rem;
          }
        }
        .main {
          margin-top: .25rem;
          font-size: .11rem;
          display: flex;
          align-items: center;
          line-height: 1;
          .main_content {
            width: .5rem;
            height: .12rem;
            background: rgba(29,172,249,0.2);
            margin-left: .27rem;
          }
        }
        .difficulty {
          margin-top: .14rem;
          font-size: .11rem;
          display: flex;
          align-items: center;
          line-height: 1;
          .difficulty_content {
            margin-left: .27rem;
            flex: 1;
            display: flex;
            span {
              display: block;
              background: #000;
              width: .15rem;
              height: .15rem;
            }
          }
          .probability {
            margin-right: .2rem;
            display: flex;
            align-items: center;
            .probability_text {
              font-size: .11rem;
              margin-right: .11rem;
            }
            .probability_num {
              font-size: .13rem;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
`

const StyledTestBottom = styled.div`
  width: 100%;
  border-top: .01rem solid #DEDEDE;
  position: absolute;
  bottom: 0;
  z-index: 99999;
  background: #fff;
  .menuTop {
    display: flex;
    height: .5rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 .15rem;
      .b_left {
      display: flex;
      align-items: center;
      span {
        display: block;
      }
      .pic {
        width: .15rem;
        height: .15rem;
        background: url(${collect}) center no-repeat;
        background-size: .15rem .15rem;
        margin-right: .06rem;
      }
      .text {
        font-size: .13rem;
        line-height: .15rem;
      }
    }
    .b_right {
      display: flex;
      justify-content: flex-end;
      .true, .false {
        display: flex;
        align-items: center;
        span {
          display: block;
        }
        .pic {
          width: .13rem;
          height: .13rem;
          margin-right: .06rem;
        }
      }
      .true {
        margin-right: .3rem;
        .pic {
          background: url(${right}) center no-repeat;
          background-size: .13rem .13rem;
        }
      }
      .false {
        .pic {
          background: url(${error}) center no-repeat;
          background-size: .16rem .16rem;
        }
      }
    }
    .menu {
      margin-left: .4rem;
      display: flex;
      align-items: center;
      span {
        display: block;
      }
      .pic {
        width: .13rem;
        height: .13rem;
        background: url(${menu}) center no-repeat;
        background-size: .13rem .13rem;
      }
      .num {
        margin-left: .05rem;
      }
    }
  }
  .menuBottom {
    height: 0;
    transition: all .1s linear;
    ul {
      border-top: .01rem solid #DEDEDE;
      display: flex;
      max-height: 100%;
      flex-wrap: wrap;
      align-items: flex-start;
      padding: .15rem;
      overflow-y: scroll;
    }
    .queNum {
      width: .3rem;
      height: .3rem;
      border-radius: 50%;
      border: .01rem solid #A1A1A1;
      text-align: center;
      line-height: .3rem;
      margin-right: .33rem;
      margin-bottom: .15rem;
    }
    .queNum:nth-child(6n) {
      margin-right: 0;
    }
  }
`

export {
  StyledTestPaper,
  StyledTestBottom
}