import styled from 'styled-components'


const ItemContainer = styled.div`
  width: 100%;
  height: 1rem;
  background: #ffffff;
  a{
    font-size: .11rem;
    line-height: .11rem;
    color: #131313;
    display: inline-block;
    padding-right: .15rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .firstImg{
      width: .165rem;
      height: .225rem;
      margin: 0 .12rem 0 .15rem;
    }
    >div{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      .profilePhotoImg{
        width: .45rem;
        height: .45rem;
        margin-right: .15rem;
      }
      >div:nth-child(2){
        .noLikeColor{
          color: #A1A1A1;
        }
        >div:nth-child(1){
          span{
            font-size: .13rem;
            line-height: .13rem;
            margin-right: .11rem;
          } 
        }
        .center{
          margin: .07rem 0;
        }
        >div:nth-child(3){
          span:nth-child(2){
            margin: 0 .08rem 0 .05rem;
          }
          span:nth-child(4){
            margin: 0 .05rem 0 .08rem;
          }
        }
      }
      >div:nth-child(3){
        margin-top: .14rem;
        margin-left: .7rem; 
        display: flex;
        flex-direction: column;
        img{
          align-self:flex-end;
        }
      }
    }
    .authImg{
      width: .375rem;
      height: .14rem;
    }
    .jcjlImg{
      width: .415rem;
      height: .415rem;
      margin-top: .05rem;
    }
  }
`
export {
  ItemContainer
}