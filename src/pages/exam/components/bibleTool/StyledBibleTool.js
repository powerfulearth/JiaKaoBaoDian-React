import styled from 'styled-components'

const BannerPic = styled.div`
  .bannerPic {
    width: 100%;
    height: .83rem;
    background: #000;
    img {
      width: 100%;
      height: 100%;
    }
  }
`

const StyledBibleToolContainer = styled.div`
  margin-top: .2rem;
  padding: 0 .15rem;
  .title {
    font-size: .15rem;
    font-weight: 500;
    line-height: .15rem;
  }
  .tollBox {
    margin-top: .1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .toll_item {
      width: .75rem;
      height: .9rem;
      background: #F5F8F9;
      border-radius: .05rem;
      text-align: center;
      .toll_item_title {
        font-size: .11rem;
        line-height: .15rem;
        margin: .11rem 0;
      }
      .toll_item_pic {
        width: .45rem;
        height: .43rem;
        background: #000;
        display: block;
        margin: 0 auto;
      }
    }
  }
`



export {
  BannerPic,
  StyledBibleToolContainer
}