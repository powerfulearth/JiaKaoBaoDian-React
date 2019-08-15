import styled from 'styled-components'

const StyledTestContainer = styled.div`
  margin: .2rem 0;
  padding: 0 .15rem;
  height: 1rem;
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-wrapper {
      display: flex;
      align-items: center;
      .swiper-slide {
        width: 1.29rem !important;
        height: .75rem;
        background: linear-gradient(93deg,rgba(0,169,241,1),rgba(0,98,234,1));
        border-radius: .1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: .15rem;
        p {
          line-height: .15rem;
        }
        p:nth-child(2) {
          margin-top: .06rem;
        }
      }
      .swiper-slide:nth-child(2) {
        z-index: 2;
        background: linear-gradient(90deg,rgba(46,226,195,1),rgba(16,184,193,1));
      }
      .swiper-slide:nth-child(3) {
        background: linear-gradient(90deg,rgba(254,158,90,1),rgba(254,91,75,1));
      }
      .swiper-slide-active {
        width: 1.68rem !important;
        height: 1rem;
        z-index: 9999;
      }
    }
  }
`

export {
  StyledTestContainer
}