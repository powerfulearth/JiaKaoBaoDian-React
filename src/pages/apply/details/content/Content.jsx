import React, { Component } from 'react';
import { Link} from "react-router-dom";

import {ContentContainer} from './StyledContentContainer';

import MoreImg from '../../../../assets/images/apply/more.png';
import RankingImg from '../../../../assets/images/apply/ranking.png';

import ClassType from '../../components/classType/ClassType';

class Content extends Component {
  render() {
    return (
      <ContentContainer>
        <div className="ranking">
          <img src={RankingImg} alt="排行图标"/>
          <span>综合排名第1名</span>
          <span>查看榜单</span>
          <img src={MoreImg} alt="更多图标"/>
        </div>
        <ul>
          <span></span>
          <li>班型</li>
          <li>场地</li>
        </ul>
        <ClassType></ClassType>
        <ClassType></ClassType>
        <ClassType></ClassType>
        <ClassType></ClassType>
        <ClassType></ClassType>
        <Link to="/apply/jxdetail/allclass">
          <span>查看全部班型 &nbsp;（共35个）</span>
            <img src={MoreImg}  alt="更多"/>
        </Link>
        <div className="ranking">
          <span>教练团队</span>
          <span>全部120名教练</span>
          <img src={MoreImg} alt="更多图标"/>
        </div>
      </ContentContainer>
    );
  }
}

export default Content;
