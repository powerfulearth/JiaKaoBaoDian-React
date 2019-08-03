import React, { Component } from 'react';

import ExamTabNavUI from '../components/examTabNav/ExamTabNav'
import ExamTest from '../components/examTest/ExamTest'

import BibleTool from '../components/bibleTool/BibleTool'

class Four extends Component {
  render() {
    return (
      <>
        <ExamTabNavUI></ExamTabNavUI>
        <ExamTest></ExamTest>
        <BibleTool></BibleTool>
      </>
    );
  }
}

export default Four;