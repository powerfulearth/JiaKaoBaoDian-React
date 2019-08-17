import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { BannerPic, StyledBibleToolContainer } from "./StyledBibleTool";

class BibleTool extends Component {
  render() {
    return (
      <>
        <BannerPic>
          <div className="bannerPic">
            <img src={require('assets/images/exam/one/banner.png')} alt=""/>
          </div>
        </BannerPic>
        <StyledBibleToolContainer>
          <h3 className="title">宝典工具</h3>
          <div className="tollBox">
            <div className="toll_item" onTouchEnd={() => this.props.history.push(`/exam/myCollections`)}>
              <p className="toll_item_title">我的收藏</p>
              <img src={require('assets/images/exam/one/01.png')} alt="" className="toll_item_pic" />
            </div>
            <div className="toll_item" onTouchEnd={() => this.props.history.push(`/exam/myGrade`)}>
              <p className="toll_item_title">我的成绩</p>
              <img src={require('assets/images/exam/one/02.png')} alt="" className="toll_item_pic" />
            </div>
            <div className="toll_item">
              <p className="toll_item_title">语音读题</p>
              <img src={require('assets/images/exam/one/03.png')} alt="" className="toll_item_pic" />
            </div>
            <div className="toll_item">
              <p className="toll_item_title">我的排行</p>
              <img src={require('assets/images/exam/one/04.png')} alt="" className="toll_item_pic" />
            </div>
          </div>
        </StyledBibleToolContainer>
      </>
    );
  }
}

export default withRouter(BibleTool);