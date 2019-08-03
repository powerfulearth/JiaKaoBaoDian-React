import React, { Component } from 'react';

import { StyledExamTabNavContainer } from './StyledExamTabNav'

class ExamTabNavUI extends Component {
  render() {
    return (
      <StyledExamTabNavContainer>
        <div className="tabBox">
          <ul className="tabNav">
            <li className="item">
              <img src="" alt=""/>
              <p>专项练习</p>
            </li>
            <li className="item">
              <img src="" alt=""/>
              <p>专项练习</p>
            </li>
            <li className="item">
              <img src="" alt=""/>
              <p>专项练习</p>
            </li>
            <li className="item">
              <img src="" alt=""/>
              <p>专项练习</p>
            </li>
          </ul>
          <ul className="tabNav">
            <li className="item">
              <img src="" alt=""/>
              <p>专项练习</p>
            </li>
            <li className="item">
              <img src="" alt=""/>
              <p>专项练习</p>
            </li>
            <li className="item">
              <img src="" alt=""/>
              <p>专项练习</p>
            </li>
            <li className="item">
              <img src="" alt=""/>
              <p>专项练习</p>
            </li>
          </ul>
        </div>
      </StyledExamTabNavContainer>
    );
  }

}

export default ExamTabNavUI;