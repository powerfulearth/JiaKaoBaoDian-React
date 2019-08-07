import styled from 'styled-components'

const StyledExamTabNavContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 1.68rem;
  padding: 0 .15rem ;
  background: #FEE83D;
  border-radius: 0 0 .3rem .3rem;
  .tabBox {
    width: 3.45rem;
    height: 1.45rem;
    background: #fff;
    margin: 0 auto;
    margin-top: .09rem;
    padding: .13rem .1rem;
    border-radius: .2rem;
    box-shadow:0px 3px 4px 0px rgba(28,28,28,0.1);
    .tabNav {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item {
        img {
          display: block;
          width: .3rem;
          height: .3rem;
          background: #000;
          margin: 0 auto;
        }
        p {
          margin-top: .1rem;
          font-size: .13rem;
          line-height: 1;
        }
      }
    }
    .tabNav:nth-child(2) {
      margin-top: .15rem;
    }
  }
`
export {
  StyledExamTabNavContainer
}