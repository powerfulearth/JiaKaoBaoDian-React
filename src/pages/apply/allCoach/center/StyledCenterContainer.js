import styled from 'styled-components'

const CenterContainer = styled.div`
  background: #ffffff;
  >p:first-child{
    padding: .2rem 0 .15rem .155rem;
    font-size: .23rem;
    font-weight:bold;
    line-height: .23rem;
  }
  >p:nth-child(2){
    margin-left: .155rem;
    padding-bottom: .1rem;
    font-size: .13rem;
    font-weight: bold;
    font-family:PingFang-SC-Bold;
    color: #A1A1A1;
    line-height: .13rem;
  }
`
export {
  CenterContainer
}