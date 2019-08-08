import React from 'react';

import { StyledExamTabNavContainer } from './StyledExamTabNav'

export default (props) => (
  <StyledExamTabNavContainer>
    <div className="tabBox">
      <ul className="tabNav">
        <li className="item" onTouchEnd={props.itemDetail}>
          <img src="" alt="" />
          <p>专项练习</p>
        </li>
        <li className="item">
          <img src="" alt="" />
          <p>专项练习</p>
        </li>
        <li className="item">
          <img src="" alt="" />
          <p>专项练习</p>
        </li>
        <li className="item">
          <img src="" alt="" />
          <p>专项练习</p>
        </li>
        <li className="item">
          <img src="" alt="" />
          <p>专项练习</p>
        </li>
        <li className="item">
          <img src="" alt="" />
          <p>专项练习</p>
        </li>
        <li className="item">
          <img src="" alt="" />
          <p>专项练习</p>
        </li>
        <li className="item">
          <img src="" alt="" />
          <p>专项练习</p>
        </li>
      </ul>
    </div>
  </StyledExamTabNavContainer>
)