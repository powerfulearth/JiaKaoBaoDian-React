import styled from 'styled-components'

import JiaoXiaoImg from '../../../../assets/images/jiaxiao.jpg'

const HeadContainer = styled.div`
  width: 100%;
  height: 1.93rem;
  background: url(${JiaoXiaoImg}) no-repeat;
  background-size: 100%;
  .leftArrow{
    width: .18rem;
    height: .12rem;
    position: absolute;
    left: .15rem;
    top: .21rem;
  }
  .threePoints{
    width: .04rem;
    height: .15rem;
    position: absolute;
    top: .21rem;
    right: .27rem;
  }
  .num{
    width: .52rem;
    height: .2rem;
    background:#DEDEDE;
    border-radius: .1rem 0 0 .1rem;
    position: absolute;
    top: 1.23rem;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
      font-size: .11rem;
      font-family:PingFang-SC-Regular;
      font-weight:400;
      color:rgba(19,19,19,1);
      line-height: .15rem;
    }
  }
`

export {
  HeadContainer
}