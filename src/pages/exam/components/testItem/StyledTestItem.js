import styled from 'styled-components'

const StyledTestItemContainer = styled.div`
  margin-top: .3rem;
  padding: 0 .15rem;
  .item_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: .15rem;
      font-weight: 500;
    }
    p {
      font-size: .11rem;
      color: #A1A1A1;
    }
  }
  .item_box {
    margin-top: .1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item_video {
      width: 1.68rem;
      .video_pic {
        img {
          width: 1.68rem;
          height: 1.2rem;
          display: block;
        }
      }
      .video_title {
        font-size: .15rem;
        margin-top:  .1rem;
      }
      .video_bottom {
        margin: .1rem 0; 
        display: flex;
        align-items: center;
        color: #A1A1A1;
        .passRate {
          font-size: .13rem;
          line-height: .15rem;
        }
        .viewCounts {
          font-size: .13rem;
          line-height: .15rem;
          display: flex;
          align-items: center;
          margin-left: .25rem;
          img {
            width: .1rem;
            height: .12rem;
            margin-right: .06rem;
          }
        }
      }
    }
  }
`

export {
  StyledTestItemContainer
}