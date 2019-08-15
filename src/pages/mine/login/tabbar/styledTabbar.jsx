import styled from 'styled-components'

const TabbarContent = styled.div`
  width: 100%;
  > .tabbar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .45rem 0 .05rem;  
    font-size: .16rem;
    font-weight: 800;
    color: #a7a7a7;
    > .mid {
      padding: 0 .2rem;
      font-size: .2rem;
      font-weight: 300;
    }
    > .active {
      color: #ffdf56;
    }
  }
`

export {
  TabbarContent
}