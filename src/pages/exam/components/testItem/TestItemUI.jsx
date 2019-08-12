import React, { Component } from 'react';

import { StyledTestItemContainer } from "./StyledTestItem";

class TestItemUI extends Component {
  render() {
    return (
      <StyledTestItemContainer>
        <div className="item_header">
          <h3>考试项目</h3>
          <p>真实项目讲解</p>
        </div>
        <div className="item_box">
          <div className="item_video">
            <div className="video_pic">
              <img src="" alt=""/>
              <div className="icon"></div>
            </div>
            <p className="video_title">倒车入库</p>
            <div className="video_bottom">
              <p className="passRate">通过率70%</p>
              <p className="viewCounts">
                <span></span>
                389.4万
              </p>
            </div>
          </div>
          <div className="item_video">
            <div className="video_pic">
              <img src="" alt=""/>
              <div className="icon"></div>
            </div>
            <p className="video_title">倒车入库</p>
            <div className="video_bottom">
              <p className="passRate">通过率70%</p>
              <p className="viewCounts">
                <span></span>
                389.4万
              </p>
            </div>
          </div>
          <div className="item_video">
            <div className="video_pic">
              <img src="" alt=""/>
              <div className="icon"></div>
            </div>
            <p className="video_title">倒车入库</p>
            <div className="video_bottom">
              <p className="passRate">通过率70%</p>
              <p className="viewCounts">
                <span></span>
                389.4万
              </p>
            </div>
          </div>
          <div className="item_video">
            <div className="video_pic">
              <img src="" alt=""/>
              <div className="icon"></div>
            </div>
            <p className="video_title">倒车入库</p>
            <div className="video_bottom">
              <p className="passRate">通过率70%</p>
              <p className="viewCounts">
                <span></span>
                389.4万
              </p>
            </div>
          </div>
        </div>
      </StyledTestItemContainer>
    );
  }
}

export default TestItemUI;