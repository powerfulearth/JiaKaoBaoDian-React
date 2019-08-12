import styled from 'styled-components'

// import border from "../../components/styles/border"

const FooterContainer = styled.div`
  width: 100%;
  height: .49rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  display: flex;
  align-items: center;
  img{
    width: .19rem;
    height: .19rem;
    margin: 0 .2rem 0 .3rem;
  }
  div{
    width: 2.75rem;
    height: .3rem;
    background:#FEE83D;
    border-radius: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight:400;
    font-size: .13rem;
    color: #FFFFFF;
  }
`

// const BorderFooter = styled(border({
//   component: FooterContainer,
//   borderWidth: '1rem 0 0 0',
//   borderColor: '#f00'
// }))`
//   color: #ee742f;
// `

// export default border({
//   component: FooterContainer,
//   borderWidth: '1rem 0 0 0'
// })

export {
  FooterContainer
}