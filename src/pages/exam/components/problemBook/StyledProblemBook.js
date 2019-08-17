import styled from 'styled-components'

const StyledProblemBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  header {
    height: .44rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFE000;
    border-bottom: .01rem solid #A1A1A1;
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
    overflow: scroll;
    padding: .21rem .13rem 0;
    .title {
      display: flex;
      align-items: center;
      img {
        width: .25rem;
        height: .35rem;
      }
      .text {
        font-size: .24rem;
        line-height: 1;
        margin-left: .11rem;
      }
    }
    .problemList {
      margin-top: .12rem;
      .item {
        width: 100%;
        padding: .15rem 0;
        border-bottom: .01rem solid #A1A1A1;
        font-size: .17rem;
        line-height: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .item:last-child {
        border: 0;
      }
    }
    .feedbackBtn {
      width: 1.75rem;
      height: .45rem;
      background: linear-gradient(0deg,rgba(255,85,0,1) 0%,rgba(254,232,61,1) 100%);
      border-radius: .23rem;
      text-align: center;
      line-height: .45rem;
      margin: 0 auto;
      font-size: .18rem;
      color: #fff;
      margin-top: .2rem;
    }
  }
`

export {
  StyledProblemBookContainer
}