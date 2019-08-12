import styled from 'styled-components'

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 3.6rem;
  height: 1.45rem;
  background: #ffffff;
  box-shadow:0 .01rem .02rem 0rem rgba(0,94,150,0.56);
  border-radius: .05rem;
  position: absolute;
  left: .075rem;
  top: 1.55rem;
  .scanImg{
    position: absolute;
    top: .25rem;
    left: 1.24rem;
    width: .13rem;
    height: .13rem;
  }
  .phoneImg{
    width: .3rem;
    height: .3rem;
    position: absolute;
    top: .16rem;
    right: 0.11rem;
  }
  .title{
    font-size: .18rem;
    font-weight: bold;
    padding-top: .2rem;
    margin-left: .075rem;
    line-height: .18rem;
  }
  .info{
    display: flex;
    padding: .16rem 0 .12rem .11rem;
    div{
      height: .2rem;
      background:rgba(29,172,249,1);
      border-radius: .1rem;
      margin-right: .05rem;
      opacity:0.2;   
      span{
        color: black;
        font-size: .11rem;
        line-height: .11rem;
        margin: 0 .05rem;
      }
    }
  }
  .address,.grade{
    display: flex;
    align-items: center;
    height: .15rem; 
    margin: 0 0 .13rem .1rem;
    font-size: .11rem;
    font-weight: 400;
    img:nth-child(1){
      width: .15rem;
      height: .15rem;
      margin-right: .05rem;
    }
    .more{
      width: .08rem;
      height: .12rem;
      margin-left: .05rem;
    }
  }
  .address{
    p:nth-child(2){
      margin-right: 1.1rem;
      font-size: .13rem;
    }
  }
  .grade{
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
  }
`

export {
  MessageContainer 
}