import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import { StyledTestQuestions } from './StyledTestQuestions'

import TestHeader from './testHeader/TestHeader'
import TestPaper from './testPaper/TestPaper'
// import TestBottom from './testBottom/TestBottom'


class TestQuestions extends Component {
  render() {
    return (
        <StyledTestQuestions>
          <TestHeader></TestHeader>
          <Route path="/exam/orderPractice/:page/:type" component={TestPaper}>
          </Route>
        </StyledTestQuestions>
    );
  }
}

export default TestQuestions;