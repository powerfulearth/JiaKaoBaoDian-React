import React, { Component } from 'react';

import {BotContainer , BorderItem} from './StyledBotWrapContainer';
import JiaxiaoImg from '../../../assets/images/apply/jiaxiao.png';

class BottomWrap extends Component {
  render() {
    return (
      <BotContainer>
        <BorderItem hasBorder={true}>
        <a href="/apply/jxdetail">
            <img src={JiaxiaoImg} alt=""/>
            <div className="nm">
              <span>东方时尚驾校</span>
              <div>4.8分</div>
              <div className="price">
                <span>￥5600</span>
                <span>C1</span>
                <span>普通班</span>
              </div>
            </div>
            <div className="distance">
              <span>规模指数100</span>
              <span>35km</span>
            </div>
          </a>
        </BorderItem>
        <BorderItem hasBorder={true}> 
        <a href="/apply/jxdetail">
            <img src={JiaxiaoImg} alt=""/>
            <div className="nm">
              <span>东方时尚驾校</span>
              <div>4.8分</div>
              <div className="price">
                <span>￥5600</span>
                <span>C1</span>
                <span>普通班</span>
              </div>
            </div>
            <div className="distance">
              <span>规模指数100</span>
              <span>35km</span>
            </div>
          </a>
        </BorderItem>
      </BotContainer>
    );
  }
}

export default BottomWrap;