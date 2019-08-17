import styled from 'styled-components'

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    position: relative;
    > div {
      
    }
  }
`

const StyledTitle = styled.div`
  font-size: .16rem;
  color: #ffd521;
  text-align: center;
  margin-bottom: .18rem;
  
`

export {
  StyledMainContainer,
  StyledTitle
}