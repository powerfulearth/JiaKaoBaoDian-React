import React, { Component } from 'react';

import {ContentContainer} from './StyledContentContainer';

import MoreImg from '../../../../assets/images/apply/more.png';
import RankingImg from '../../../../assets/images/apply/ranking.png';

class Content extends Component {
  render() {
    return (
      <ContentContainer>
        <div className="ranking">
          <img src={RankingImg} alt="排行图标"/>
          <span>综合排名第1名</span>
          <span>查看榜单</span>
          <img src={MoreImg} alt="跟多图标"/>
        </div>
        <ul>
          <span></span>
          <li>班型</li>
          <li>场地</li>
        </ul>
        <div className="classType">
          <div>
            <p>
              <span>C1</span>
              <span>普通班</span>
              <span>￥5600</span>
            </p>
            <p>  
              <span>45天拿本</span>
              <span>班车接送</span>
              <span>一人一车</span>
            </p>
          </div>
          <a href="#" >
             免费咨询
          </a>
        </div>
        <div className="classType">
          <div>
            <p>
              <span>C1</span>
              <span>普通班</span>
              <span>￥5600</span>
            </p>
            <p>  
              <span>45天拿本</span>
              <span>班车接送</span>
              <span>一人一车</span>
            </p>
          </div>
          <a href="#" >
             免费咨询
          </a>
        </div>
        <div className="classType">
          <div>
            <p>
              <span>C1</span>
              <span>普通班</span>
              <span>￥5600</span>
            </p>
            <p>  
              <span>45天拿本</span>
              <span>班车接送</span>
              <span>一人一车</span>
            </p>
          </div>
          <a href="#" >
             免费咨询
          </a>
        </div>
      </ContentContainer>
    );
  }
}

export default Content;
