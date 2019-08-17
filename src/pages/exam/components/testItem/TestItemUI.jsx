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
              <img src={require('assets/images/exam/two/video1.png')} alt=""/>
              <div className="icon"></div>
            </div>
            <p className="video_title">倒车入库</p>
            <div className="video_bottom">
              <p className="passRate">通过率70%</p>
              <p className="viewCounts">
                <img src={require('assets/images/exam/two/pic.png')} alt=""/>
                <span className="num">389.4万</span>
              </p>
            </div>
          </div>
          <div className="item_video">
            <div className="video_pic">
              <img src={require('assets/images/exam/two/video1.png')} alt=""/>
              <div className="icon"></div>
            </div>
            <p className="video_title">倒车入库</p>
            <div className="video_bottom">
              <p className="passRate">通过率70%</p>
              <p className="viewCounts">
                <img src={require('assets/images/exam/two/pic.png')} alt=""/>
                <span className="num">389.4万</span>
              </p>
            </div>
          </div>
          <div className="item_video">
            <div className="video_pic">
              <img src={require('assets/images/exam/two/video1.png')} alt=""/>
              <div className="icon"></div>
            </div>
            <p className="video_title">倒车入库</p>
            <div className="video_bottom">
              <p className="passRate">通过率70%</p>
              <p className="viewCounts">
                <img src={require('assets/images/exam/two/pic.png')} alt=""/>
                <span className="num">389.4万</span>
              </p>
            </div>
          </div>
          <div className="item_video">
            <div className="video_pic">
              <img src={require('assets/images/exam/two/video1.png')} alt=""/>
              <div className="icon"></div>
            </div>
            <p className="video_title">倒车入库</p>
            <div className="video_bottom">
              <p className="passRate">通过率70%</p>
              <p className="viewCounts">
                <img src={require('assets/images/exam/two/pic.png')} alt=""/>
                <span className="num">389.4万</span>
              </p>
            </div>
          </div>
        </div>
      </StyledTestItemContainer>
    );
  }
}

export default TestItemUI;