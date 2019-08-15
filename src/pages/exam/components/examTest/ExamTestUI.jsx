import React from 'react';

import { StyledTestContainer } from './StyledExamTest'

import { Link } from 'react-router-dom'

function ExamTestUI(props) {
  return (
    <StyledTestContainer>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <Link className="swiper-slide" to={`/exam/orderPractice/${props.currentPage}/TEST_PAGE_ALLSIMULATE`}>
            <p>全真模拟</p>
            <p>100%仿真</p>
          </Link>
          <Link className="swiper-slide" to={`/exam/orderPractice/${props.currentPage}/TEST_PAGE_ORDER`}>
            <p>顺序练习</p>
            <p>0/1334</p>
          </Link>
          <Link className="swiper-slide" to={`/exam/practiceExams/${props.currentPage}/TEST_PAGE_SIMULATEEXAM`}>
            <p>模拟考试</p>
            <p>100%仿真</p>
          </Link>
        </div>
      </div>
    </StyledTestContainer>
  )
}

export default ExamTestUI