import styled from 'styled-components'

const InfoContainer = styled.div`
  background: #ffffff;
  .info{
    display: flex;
    width: 100%;
    height: .7rem;
    padding: .2rem 0  0 .15rem;
    >img{
      width: .5rem;
      height: .5rem;
      margin-right: .15rem;
    }
    >div{
      >div:nth-child(1){
        display: flex;
        align-items: center;
        margin: .06rem 0 .08rem 0;
        span{
          font-size: .15rem;
          line-height: .15rem;
          font-weight:bold;
        }
      }
      >div:nth-child(2){
        line-height: 1;
        img{
          width: .12rem;
          height: .11rem;
          margin-right: .03rem;
        }
        .grade{
          font-size: .1rem;
          line-height: .1rem;
          margin: 0 .2rem 0 .04rem;
          color: #FFC000;
        }
        .student{
          font-size: .11rem;
          line-height: .11rem;
          font-weight:400;
        }
      }
    }
    .redStarImg{
      width: .195rem;
      height: .195rem;
      margin-left: .06rem;
    }
  }
  .auth{
    margin: .12rem 0 0 .7rem;
    div{
      margin-bottom: .12rem;
      img{
        width: .47rem;
        height: .15rem;
        margin-right: .15rem;
      }
      span{
        padding: .04rem .08rem;
        background: #FFED6A;
        border-radius: .1rem;
        opacity:0.2;
        color: #131313;
        font-size: .11rem;
        line-height: .11rem;
        font-weight:400;
        margin-right: .15rem;
      }
    }
    div:nth-child(2){
      span{
        padding: .04rem .05rem;
      }
    }

  }

`
export {
  InfoContainer
}