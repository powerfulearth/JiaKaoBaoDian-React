import React, { Component } from 'react';

import { StyledTestBottomContainer } from './StyledTestBottom'

class TestBottomUI extends Component {
  render() {
    return (
      <StyledTestBottomContainer>
        <div className="b_left">
          <span className="pic">☆</span>
          <span className="text">收藏</span>
        </div>
        <div className="b_right">
          <div className="true">
            <span className="pic">√</span>
            <span className="num">0</span>
          </div>
          <div className="false">
            <span className="pic">×</span>
            <span className="num">0</span>
          </div>
          <div className="menu">
            <span className="pic"></span>
            <span className="num">
              <i className="done">1</i>
              /
              <i className="total">1334</i>
            </span>
          </div>
        </div>
      </StyledTestBottomContainer>
    );
  }
}

export default TestBottomUI;