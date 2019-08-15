import styled from 'styled-components'

const ClassTypeContainer = styled.div`
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
      p{
        span:nth-child(2){
          margin: 0 .1rem 0 .05rem;
        }
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
`

export {
  ClassTypeContainer
}