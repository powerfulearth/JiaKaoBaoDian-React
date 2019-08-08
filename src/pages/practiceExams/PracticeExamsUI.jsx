import React from 'react'

import TestPaper from '../testQuestions/testPaper/TestPaper'
import { StyledPracticeExams } from './StyledPracticeExams'

export default (props) => (
  <StyledPracticeExams>
    <header>
      <h3>倒计时 {props.time.minute}:{props.time.second}</h3>
      <span className="back" onTouchEnd={props.back}></span>
    </header>
    <TestPaper></TestPaper>
  </StyledPracticeExams>
)