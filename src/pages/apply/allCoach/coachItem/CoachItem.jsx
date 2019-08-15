import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {ItemContainer} from './StyledItemContainer';
import JcjlImg from '../../../../assets/images/apply/杰出教练.png';
import OneImg from '../../../../assets/images/apply/1.png';
import ProfilePhotoImg from '../../../../assets/images/apply/头像.png';
import AuthImg from '../../../../assets/images/apply/auth.png';


class CoachItem extends Component {
  render() {
    return (
      <ItemContainer>
        <Link to="/apply/jxdetail/allcoach/jldetail">
          <img className="firstImg" src={OneImg} alt="第一"/>
          <div>
            <img className="profilePhotoImg" src={ProfilePhotoImg} alt="头像"/>
            <div>
              <div>
                <span>霍勇甫</span>
                <img className="authImg" src={AuthImg} alt=""/>
              </div>
              <div className="center">
                <span className="noLikeColor">5.0分</span>
              </div>
              <div>
                <span>学员</span>
                <span className="noLikeColor">6233</span>
                <span>|</span>
                <span>教龄</span>
                <span className="noLikeColor">9</span>
              </div>
            </div>
            <div>
              <p>24小时内活跃</p>
              <img className="jcjlImg" src={JcjlImg} alt="杰出教练"/>
            </div>
          </div>
        </Link>
      </ItemContainer>
    );
  }
}

export default CoachItem;
