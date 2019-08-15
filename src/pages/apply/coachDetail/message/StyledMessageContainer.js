import styled from 'styled-components'

const MessageContainer = styled.div`
  padding-top: .08rem;
  .address,.grade,.flower{
    display: flex;
    align-items: center;
    height: .15rem; 
    margin: 0 0 .26rem .15rem;
    font-size: .15rem;
    font-weight: 400;
    img:nth-child(1){
      width: .15rem;
      height: .15rem;
      margin-right: .09rem;
    }
    .more{
      width: .08rem;
      height: .12rem;
      margin-left: .1rem;
    }
  }
  .address{
    p:nth-child(2){
      margin-right: 1.1rem;
      font-size: .15rem;
    }
    p:nth-child(3){
      font-size: .12rem;
    }
  }
  .flower{
    height: .35rem;
    div:nth-child(2){
      margin-right: .8rem;
      p{
        font-size: .15rem;
        line-height: .15rem;
      }
      p:nth-child(2){
        font-size: .12rem;
        line-height: .12rem;
        margin-top: .08rem;
        color:#A1A1A1;
      }
    }
    p:nth-child(3){
      font-size: .12rem;
    }
  }
  .grade{
    p:nth-child(2){
      margin-right:1.45rem;
    }
  }
  /* .flower{
    p:nth-child(2){
      margin-right: 0.09rem;
      font-size: .13rem;
      span:first-child{
        margin-right: .05rem;
      }
    }
    span:nth-child(3){
      margin-right: 1.5rem;
      color: #A1A1A1;
    }
  } */
`
export {
  MessageContainer
}