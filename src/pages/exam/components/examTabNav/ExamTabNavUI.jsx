import React from 'react';

import { StyledExamTabNavContainer } from './StyledExamTabNav'

export default (props) => (
  <StyledExamTabNavContainer>
    <div className="tabBox">
      <ul className="tabNav">
        <li className="item" onTouchEnd={props.itemDetail}>
          <img src={require('assets/images/exam/one/专项练习.png')} alt="" />
          <p>专项练习</p>
        </li>
        <li className="item">
          <img src={require('assets/images/exam/one/我的错题.png')} alt="" />
          <p>我的错题</p>
        </li>
        <li className="item">
          <img src={require('assets/images/exam/one/图标技巧.png')} alt="" />
          <p>图标技巧</p>
        </li>
        <li className="item">
          <img src={require('assets/images/exam/one/VIP课程.png')} alt="" />
          <p>VIP课程</p>
        </li>
        <li className="item">
          <img src={require('assets/images/exam/one/学员惠购.png')} alt="" />
          <p>学员惠购</p>
        </li>
        <li className="item">
          <img src={require('assets/images/exam/one/随机练习.png')} alt="" />
          <p>随机练习</p>
        </li>
        <li className="item">
          <img src={require('assets/images/exam/one/难题功课.png')} alt="" />
          <p>难题功课</p>
        </li>
        <li className="item">
          <img src={require('assets/images/exam/one/考试秘籍.png')} alt="" />
          <p>考试秘籍</p>
        </li>
      </ul>
    </div>
  </StyledExamTabNavContainer>
)