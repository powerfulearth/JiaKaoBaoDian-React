import styled from 'styled-components'

const StyledSpecialTestContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .container {
    flex: 1;
    border-top: .01rem solid #EDEDED;
    background: #f7f7f7;
    .testBox {
      height: 100%;
      .public {
        background: #fff;
        display: flex;
        flex-wrap: wrap;
        .item {
          height: .5rem;
          padding-left: .21rem;
          border-bottom: .01rem solid #EDEDED;
          flex: 50%;
          display: flex;
          align-items: center;
          .pic {
            display: block;
            width: .17rem;
            height: .17rem;
            border-radius: 50%;
            background: #000;
            margin-right: .06rem;
          }
          .text {
            font-size: .15rem;
          }
        }
      }
      .chapter, .error {
        .item {
          border: 0;
        }
      }
      .error {
        margin: .11rem 0;
      }
      .type {
        height: auto;
        .item {
          .pic {
            margin-right: .1rem;
          }
          .text {
            font-size: .13rem;
          }
          .num {
            font-size: .13rem;
            color: #A1A1A1;
            margin-left: .1rem;
          }
        }
      }
    }
  }
  
`

export {
  StyledSpecialTestContainer
}