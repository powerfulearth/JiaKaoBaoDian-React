import styled from 'styled-components'


const ContentContainer = styled.div`
  background: #ffffff;
  >p:first-child{
    padding: .3rem 0 .2rem .155rem;
    font-size: .24rem;
    font-weight:bold;
    line-height: .24rem;
  }
  >p:nth-child(2){
    margin-left: .155rem;
    padding-bottom: .3rem;
    font-size: .14rem;
    font-weight:400;
    color:rgba(19,19,19,1);
    line-height: .14rem;
  }
`

export {
  ContentContainer
}