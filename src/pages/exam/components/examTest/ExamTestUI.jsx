import React, { Component } from 'react';

import { StyledTestContainer } from './StyledExamTest'

class ExamTestUI extends Component {
  
  render() {
    return (
      <StyledTestContainer>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <p>全真模拟</p>
              <p>100%仿真</p>
            </div>
            <div className="swiper-slide" onTouchEnd={this.props.click}>
              <p>顺序练习</p>
              <p>0/1334</p>
            </div>
            <div className="swiper-slide">
              <p>模拟考试</p>
              <p>100%仿真</p>
            </div>
          </div>
        </div>
      </StyledTestContainer>
    );
  }
}

export default ExamTestUI;