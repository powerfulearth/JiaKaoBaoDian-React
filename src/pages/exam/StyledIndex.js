import styled from 'styled-components' 


const StyledIndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  height: 100%;
  header {
    width: 100%;
    padding-top: .13rem;
    background: #FEE83D;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      font-size: .18rem;
    }
    p {
      font-size: .11rem;
      margin: 0 .02rem;
      span {
        font-size: .11rem;
      }
    }
  }
  .am-tabs-default-bar-content {
    width: 100%;
    padding: .16rem .16rem;
    display: flex;
    justify-content: space-between;
    align-items: end;
    background: #FEE83D;
    .am-tabs-default-bar-tab {
      width: auto !important;
      padding: 0;
      height: .15rem;
      font-size: .14rem;
      margin-top: .1rem;
      line-height: .15rem;
      color: #131313;
      border: 0;
    }
    .am-tabs-default-bar-tab::after {
      display: none !important;
    }
    .am-tabs-default-bar-tab-active {
      width: auto !important;
      margin: 0;
      font-size: .25rem;
      height: .24rem;
      line-height: .24rem;
      font-weight: bold;
      border: 0;
    }
    .am-tabs-default-bar-underline {
      width: 0;
      height: 0;
      border: 0;
    }
  }
` 

export {
  StyledIndexContainer
}