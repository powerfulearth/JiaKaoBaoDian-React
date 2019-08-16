import styled from 'styled-components'

const StyledTestQuestions = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    z-index: 2;
    background: rgba(0,0,0,0.3);
    display: none;
  }
`

export {
  StyledTestQuestions
}