import React, { Component } from 'react';

import { MessageContainer } from "./StyledMessage";

import PhoneImg from '../../../../assets/images/apply/phone.jpg';
import ScanImg from '../../../../assets/images/apply/scan.jpg';
import LocationImg from '../../../../assets/images/apply/location.jpg';
import FlowerImg from '../../../../assets/images/apply/flower.jpg';
import MoreImg from '../../../../assets/images/apply/more.png';

class Message extends Component {
  render() {
    return (
      <MessageContainer>
        <img className="scanImg" src={ScanImg} alt=""/>
        <img className="phoneImg" src={PhoneImg} alt=""/>
        <h1 className="title">东方时尚驾校</h1>
        <div className="info">
          <div><span>综合合格率50%</span></div>
          <div><span>规模大</span></div>
          <div><span>拿本快</span></div>
          <div><span>有接送</span></div>
          <div><span>约课方便</span></div>
        </div>
        <div className="address">
          <img src={LocationImg} alt="定位"/>
          <p>北京市大兴区金星西路19号</p>
          <span>35.2km</span>
          <img className="more" src={MoreImg} alt="更多"/>
        </div>
        <div className="grade">
          <img src={FlowerImg} alt="花"/>
          <p>
            <span>评分</span>
            <span>4.8</span>
          </p>
          <span>棒极了</span>
          <span>2179条评价</span>
          <img className="more" src={MoreImg} alt="更多"/>
        </div>
      </MessageContainer>
    );
  }
}

export default Message;
