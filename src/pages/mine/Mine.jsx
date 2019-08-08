import React, { Component } from 'react';

import avatar from 'assets/images/avatar.jpg';

import {
  MineContainer
} from './StyledMine'

class index extends Component {
  render() {
    return (
      <MineContainer>
      <div>
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
      <div>
        <header>
          <div>
            <h4>理论</h4>
            <div>科目一</div>
            <span>切换</span>
          </div>
          <div>在宝典的第<span>9</span>天</div>
        </header>
      </div>
      </MineContainer>
    );
  }
}

export default index;