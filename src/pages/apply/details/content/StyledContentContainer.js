import styled from 'styled-components'

const ContentContainer = styled.div`
  margin-top: 1.27rem;
  .ranking{
    display: flex;
    align-items: center;
    font-weight: 400;
    color: #131313;
    img:nth-child(1){
      width: .15rem;
      height: .15rem;
      margin: 0 .04rem 0 .15rem;
    }
    span:nth-child(2){
      font-size: .13rem;
    }
    span:nth-child(3){
      font-size: .11rem;
      margin: 0 .05rem 0 1.8rem;
    }
    img:nth-child(4){
      width: .08rem;
      height: .12rem;
    }
  }
  ul{
    margin-top: .12rem;
    width: 100%;
    height: .46rem;
    display: flex;
    position: relative;
    span{
      width: .19rem;
      height: .03rem;
      background:rgba(255,213,33,1);
      border-radius: .015rem;
      position: absolute;
      bottom: 0;
      left: .845rem;
    }
    li{
      flex-basis: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li:nth-child(2){
      font-weight:bold;
      font-size: .13rem;
      color: #131313;
    }
    li:last-child{
      font-weight:400;
      font-size: .13rem;
      color: #A1A1A1;
    }
  }
  .classType{
    padding: .15rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div{
      p:first-child{
      font-size: .13rem;
      line-height: .13rem;
      color: #131313;
      margin-bottom: .08rem;
      }
      p:last-child{
        font-size: .11rem;
        line-height: .11rem;
        color: #A1A1A1;
      }
    }
    a{
      display:inline-block;
      width: .7rem;
      height: .23rem;
      border: 1px solid rgba(255,213,33,1);
      border-radius: .115rem;
      font-size: .11rem;
      line-height: .23rem;
      text-align: center;
      color: #131313;
    }
  }
  >a{
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #131313;
    font-size: .15rem;
    font-weight:bold;
    margin-top: .15rem;
    img{
      margin-left: .05rem;
      width: .08rem;
      height: .12rem;
    }
  }
  .coachTeam{
    display: flex;
    justify-content: space-between;
    padding: .15rem;
    >span{
      font-size: .18rem;
      font-weight: bold;
    }
    a{
      color:#131313;
      img{
        margin-left: .05rem;
        width: .08rem;
        height: .12rem;
      }
    }
  }
  
`

export {
  ContentContainer
}