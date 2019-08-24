import styled from 'styled-components'

const HeadContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: .44rem;
  background: #ffffff;
  font-family:PingFang-SC-Bold;
  font-size: .18rem;
  font-weight:bold;
  color:rgba(19,19,19,1);
  img{
    position: absolute;
    left: .15rem;
    width: .18rem;
    height: .12rem;
  }
  `

export {
  HeadContainer
}