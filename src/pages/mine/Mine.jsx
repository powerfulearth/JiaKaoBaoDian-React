import React, { Component } from 'react';

import avatar from 'assets/images/wsl/avatar.jpg';

import {
  MineContainer
} from './StyledMine'

class index extends Component {
  render() {
    return (
      <MineContainer>
        <div className="main-container">
          <div>
            <img src={avatar}  alt=""/>
            <dl>
              <dt>马上登陆</dt>
              <dd>立即预测考试通过率</dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>名师课程</dt>
              <dd>精编试题</dd>
            </dl>
          </div>
        </div>
        <div className="theory">
          <div className="wrapper">
          <div className="theory-head">
            <div>
              <h4>理论</h4>
              <div>科目一</div>
              <span>切换</span>
            </div>
            <div>在宝典的第<span>9</span>天</div>
          </div>
          <div className="theory-main">
            <ul className="theory-main-left">
              <li>
                <span>0</span>
                <p>累计答题数<span></span></p>
                <p>正确率<span>0%</span></p>
              </li>
              <li>
                <span>0</span>
                <p>模拟考试平均分<span></span></p>
                <p>累计考试<span>0次</span></p>
              </li>
            </ul>
            <div className="theory-main-right">
              <div className="vip-course">VIP课程</div>
              <p>答题考试必备</p>
              <p>预测考试通过率</p>
            </div>
          </div>
          </div>
        </div>
        <div className="driving">
          <div className="wrapper">
            <div className="driving-head">
            <div className="driving-head-left">
              <h4>驾校</h4>
              <div>未报考驾校</div>
            </div>
            <div className="driving-head-right">绑定驾校<span>></span></div>
            </div>
            <ul className="driving-main">
              <li>
                <a href="##">
                  <i></i>
                  <span>帮我选驾校</span>
                </a>
              </li>
              <li>
                <a href="##">
                  <i></i>
                  <span>学车优惠</span>
                </a>
              </li>
              <li>
                <a href="##">
                  <i></i>
                  <span>好友驾校</span>
                </a>
              </li>
              <li>
                <a href="##">
                  <i></i>
                  <span>在线约课</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      
      </MineContainer>
    );
  }
}

export default index;