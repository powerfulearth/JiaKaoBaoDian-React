import styled from 'styled-components';

const FoundContainer = styled.div`
  background:#F7F7F7;
  header{
    height:1.06rem;
    background:rgba(254,232,61,1);
    .tit{
      line-height:.45rem;
      text-align:center;
      font-size:0.18rem;
      font-weight:500;
      color:rgba(19,19,19,1);
    }
    .search-found{
      width:2.55rem;
      line-height:0.28rem;
      background:rgba(255,255,255,1);
      border-radius:0.13rem;
      margin:0 auto .32rem;
      font-size:.11rem;
      text-indent:.26rem;
      font-weight:400;
      color:rgba(161,161,161,1);
    }
  }
  .found-container{
    margin: -.17rem .15rem 0;
    width:3.45rem;
    height:5.58rem;
    overflow:hidden;
    background:rgba(255,255,255,1);
    border-radius: .15rem .15rem;
  }
  .found-nav{
    width:100%;
    overflow:hidden;
    ul{
      display:flex;
      width:max-content;
      margin-top:.05rem;
      li{
        flex-shrink:0;
        list-style: none;
        width:0.49rem;
        line-height:0.35rem;
        font-size:0.13rem;
        font-weight:500;
        color:rgba(19,19,19,1);
        position:relative;
        /* background-color: red; */
        /* z-index:-1; */
        div{
          text-align:center;
          position:relative;
          z-index:2;
        }
      }
      .active{
        font-size:.18rem;
        font-weight:bold;
        color:rgba(19,19,19,1);
        &::after{
          content:'';
          display:block;
          width:.38rem;
          height:.04rem;
          background:rgba(255,224,0,1);
          position:absolute;
          top:.22rem;
          left:.05rem;
        }
      }
    }
  }

  .foundBox{
    height:.96rem;
    color:#131313;
    display:flex;
    padding:.1rem .11rem;
    .abstract{
      width:3.2rem;
      height:.75rem;
      .tit{
        width:1.9rem;
        line-height:.18rem;
        font-size:.13rem;
        font-weight:500;
        margin-bottom:.15rem;
      }
      .detail{
        display:flex;
        font-weight:400;
        font-size:.11rem;
        color:#7E7E7E;
        .author{
          margin-right:.11rem;
        }
      }
    }
    .pic{
      img{
        width:1.05rem;
        height:.75rem;
      }
    }
  }

`

export {
  FoundContainer
}