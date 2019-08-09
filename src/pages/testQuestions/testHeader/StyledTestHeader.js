import styled from 'styled-components'

const StyledTestHeaderContainer = styled.div`
  width: 100%;
  height: .44rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .back {
    width: .18rem;
    line-height: .44rem;
    position: absolute;
    left: .15rem;
    font-weight: bold;
    color: #424242;
  }
  .tab {
    width: 1.52rem;
    height: .3rem;
    display: flex;
    >div {
      width: 50%;
      text-align: center;
      line-height: .3rem;
      font-size: .15rem;
      border: 1px #DEDEDE solid;
    }
    .left {
      border-right: 0;
      border-radius: .04rem 0 0 .04rem;
    }
    .right {
      border-left: 0;
      border-radius: 0 .04rem .04rem 0;
    }
    .active {
      background: linear-gradient(0deg,rgba(255,213,33,1),rgba(254,232,61,1));
      border-color: #FEE83D;
      color: #fff;
      font-weight: bold;
    }
  }
  
`

export {
  StyledTestHeaderContainer
}