import styled from 'styled-components'

const ContentContainer = styled.div`
    ul{
      margin-top: .12rem;
      width: 100%;
      height: .46rem;
      display: flex;
      position: relative;
      span{
        width: .19rem;
        height: .03rem;
        background:rgba(255,213,33,1);
        border-radius: .015rem;
        position: absolute;
        bottom: 0;
        left: .845rem;
      }
      li{
        flex-basis: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      li:nth-child(2){
        font-weight:bold;
        font-size: .18rem;
        color: #131313;
      }
      li:last-child{
        font-weight:400;
        font-size: .18rem;
        color: #A1A1A1;
      }
    }
`

export {
  ContentContainer
}