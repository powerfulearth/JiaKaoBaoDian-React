import styled from 'styled-components'

const StyledPracticeExams = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  header {
    height: .44rem;
    position: relative;
    text-align: center;
    h3 {
      line-height: .44rem;
      font-size: .18rem;
    }
    .back {
      width: .18rem;
      height: .12rem;
      background: #000;
      position: absolute;
      top: .17rem;
      left: .15rem;
    }
  }
`

export {
  StyledPracticeExams
}