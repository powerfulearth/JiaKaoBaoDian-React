import styled from 'styled-components'

const HeadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: .44rem;
  background:rgba(255,224,0,1);
  font-family:PingFang-SC-Medium;
  font-size: .17rem;
  font-weight:500;
  color:rgba(19,19,19,1);
  .backImg{
    position: absolute;
    left: .165rem;
    width: .22rem;
    height: .145rem;
  }
  .threeImg{
    position: absolute;
    right: .27rem;
    width: .04rem;
    height: .15rem;
  }
  `

export {
  HeadContainer
}