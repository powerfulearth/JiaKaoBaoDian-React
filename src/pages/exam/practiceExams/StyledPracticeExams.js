import styled from 'styled-components'

const StyledPracticeExams = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  header {
    height: .44rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      line-height: .44rem;
      font-size: .18rem;
    }
    .back {
      width: .18rem;
      line-height: .44rem;
      position: absolute;
      left: .15rem;
      font-weight: bold;
      color: #424242;
    }
  }
`

export {
  StyledPracticeExams
}