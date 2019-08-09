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
      </ContentContainer>
    );
  }
}

export default Content;
