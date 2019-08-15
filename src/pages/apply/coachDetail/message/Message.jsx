import React, { Component } from 'react';

import {MessageContainer} from './StyledMessageContainer';

import LocationImg from '../../../../assets/images/apply/location.jpg';
import MoreImg from '../../../../assets/images/apply/more.png';
import FlowerImg from '../../../../assets/images/apply/flower.jpg';
import RakingImg from '../../../../assets/images/apply/ranking.png';

export class Message extends Component {
  render() {
    return (
      <MessageContainer>
        <div className="address">
          <img src={LocationImg} alt="定位"/>
          <p>北京市海淀区清河小营桥</p>
          <p>10km</p>
          <img className="more" src={MoreImg} alt="更多"/>
        </div>
        <div className="grade">
          <img src={RakingImg} alt="定位"/>
          <p>北京市教练排行榜第1名</p>
          <img className="more" src={MoreImg} alt="更多"/>
        </div>
        <div className="flower">
          <img src={FlowerImg} alt="花"/>
          <div>
            <p>已收到4105次打赏</p>
            <p>收到打赏越多，受欢迎程度越高哦~</p>
          </div>
          <p>去打赏</p>
          <img className="more" src={MoreImg} alt="更多"/>
        </div>
      </MessageContainer>
    );
  }
}

export default Message;
