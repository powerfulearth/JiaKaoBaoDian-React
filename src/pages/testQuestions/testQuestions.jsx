import React, { Component } from 'react';

import { StyledTestQuestions } from './testQuestions'

import TestHeader from './testHeader/TestHeader'
import TestPaper from './testPaper/TestPaper'
import TestBottom from './testBottom/TestBottom'


class testQuestions extends Component {
  render() {
    return (
      <StyledTestQuestions>
        <TestHeader> </TestHeader>
        <TestPaper></TestPaper>
        <TestBottom></TestBottom>
      </StyledTestQuestions>
    );
  }
}

export default testQuestions;