import styled from 'styled-components'

import HaiDianImg from '../../../../assets/images/apply/海淀.png';
import TeachImg from '../../../../assets/images/apply/教学.png';
import ClassImg from '../../../../assets/images/apply/13节.png';

const ThreeContainer = styled.div`
  background: #ffffff;
  padding: .18rem .13rem;
  >div{
    display: flex;
    width: 100%;
    justify-content: space-between;
    >div{
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: .97rem;
      height: .59rem;
      border-radius: .05rem;
      padding: .11rem 0 .11rem .13rem;
      p:nth-child(1){
        font-size: .15rem;
        line-height: .15rem;
        font-weight: bold;
      }
      p:nth-child(2){
        font-size: .12rem;
        line-height: .12rem;
        font-weight: 400;
      }
      img{
        width: .3rem;
        height: .3rem;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
    >div:nth-child(1){
      background-image:url(${HaiDianImg});
      background-size: .97rem .59rem;
    }
    >div:nth-child(2){
      background-image:url(${TeachImg});
      background-size: .97rem .59rem;
    }
    >div:nth-child(3){
      background-image:url(${ClassImg});
      background-size: .97rem .59rem;
    }
  }
  
`
export {
  ThreeContainer
}