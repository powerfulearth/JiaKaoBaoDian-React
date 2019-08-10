import React, { Component } from 'react';

import avatar from 'assets/images/wsl/avatar.jpg';

import {
  MineContainer
} from './StyledMine'

class index extends Component {
  render() {
    return (
      <MineContainer>
        <div className="login">
          <div className="main-container">
            <div>
              <img src={avatar}  alt=""/>
              <dl>
                <dt>马上登陆</dt>
                <dd>立即预测考试通过率</dd>
              </dl>
            </div>
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
        <div className="exam-wrap">
          <div className="wrapper">
            <ul className="row-1">
              <li><i className="err"></i><span>我的错题</span></li>
              <li><i className="star"></i><span>我的收藏</span></li>
              <li><i className="sync"></i><span>同步数据</span></li>
              <li><i className="change  "></i><span>切换题库</span></li>
            </ul>
            <ul className="row-2">
              <li><i className="history"></i><span>浏览记录</span></li>
              <li><i className="mypub "></i><span>我的发表</span></li>
              <li><i className="help"></i><span>陪练服务</span></li>
              <li><i className="mycore"></i><span>我的成绩</span></li>
            </ul>
          </div>
        </div>
        <div className="info-item">
          <ul className="info-top">
            <li><span><i></i>我的订单</span><i></i></li>
            <li><span><i></i>我的订阅</span><i></i></li>
          </ul>
          <ul className="info-bottom">
            <li><span><i></i>题库设置</span><i></i></li>
            <li><span><i></i>推荐朋友</span><i></i></li>
            <li><span><i></i>帮助与反馈</span><i></i></li>
            <li><span><i></i>我的设置</span><i></i></li>
          </ul>
        </div>
        <div className="share">
          <p className="share-title"><span className="left"></span><span className="middle">推荐宝典给好友</span><span className="right"></span></p>
          <ul className="share-item">
            <li>
              <i></i>
              <p>微信好友</p>
            </li>
            <li>
              <i></i>
              <p>朋友圈</p>
            </li>
            <li>
              <i></i>
              <p>QQ好友</p>
            </li>
            <li>
              <i></i>
              <p>QQ空间</p>
            </li>
          </ul>
          <p className="foot-info">选驾校 考驾照 就用驾考宝典</p>
        </div>
      </MineContainer>
    );
  }
}

export default index;