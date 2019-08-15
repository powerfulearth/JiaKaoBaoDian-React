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
      height: .12rem;
      position: absolute;
      left: .15rem;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
`

export {
  StyledPracticeExams
}