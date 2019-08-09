import React, { Component } from 'react';

import { StyledTestQuestions } from './StyledTestQuestions'

import TestHeader from './testHeader/TestHeader'
import TestPaper from './testPaper/TestPaper'
// import TestBottom from './testBottom/TestBottom'


class TestQuestions extends Component {
  render() {
    return (
      <StyledTestQuestions>
        <TestHeader></TestHeader>
        <TestPaper></TestPaper>
      </StyledTestQuestions>
    );
  }
}

export default TestQuestions;