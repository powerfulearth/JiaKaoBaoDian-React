import styled from 'styled-components'


const StyledMyCollectionsContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  header {
    height: .44rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFE000;
    padding: 0 .6rem;
    .back {
      width: .18rem;
      height: .12rem;
      position: absolute;
      left: .15rem;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .nav {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .navItem {
        text-align: center;
        width: .38rem;
        font-size: .17rem;
        height: 100%;
        line-height: .44rem;
      }
      .active {
        border-bottom: .02rem solid #131313;
        font-weight: bold;
      }
    }
  }
  section {
    flex: 1;
    .notHave {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: .17rem;
      color: #A1A1A1;
      font-weight: bold;
      display: none;
    }
    .content {
      padding: .22rem .15rem 0; 
      .item {
        display: flex;
        justify-content: center;
        margin-bottom: .2rem;
        .circle {
          display: block;
          width: .08rem;
          height: .08rem;
          border-radius: 50%;
          margin-right: .06rem;
          margin-top: .08rem;
        }
        .text {
          flex: 1;
          font-size: .15rem;
          line-height: .21rem;
          text-align: left;
        }
      }
    }
  }
`

export {
  StyledMyCollectionsContainer
}