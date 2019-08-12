import styled from 'styled-components'

const NavContainer = styled.div`
  margin-top: .2rem;
  width:3.45rem;
  height:1.45rem;
  background: #ffffff;
  border-radius: .2rem;
  display: flex;
  flex-wrap: wrap;
  a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-basis: 20%;
    img{
      margin-bottom: .1rem;
      width:0.3rem;
      height:0.3rem;
    }
    span{
      font-size:0.11rem;
      font-weight:500;
      color:rgba(19,19,19,1);
    }
  }
`

export {
  NavContainer
}
