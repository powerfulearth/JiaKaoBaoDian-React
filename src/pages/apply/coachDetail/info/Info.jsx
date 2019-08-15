import React, { Component } from 'react';

import {InfoContainer} from './StyledInfoContainer';

import ProfilePhotoImg from '../../../../assets/images/apply/头像.png';
import RedStarImg from '../../../../assets/images/apply/红星.png';
import YellowStaImg from '../../../../assets/images/apply/yellowStar.png';
import AuthImg from '../../../../assets/images/apply/auth.png';

export class Info extends Component {
  render() {
    return (
      <InfoContainer>
        <div className="info">
          <img src={ProfilePhotoImg} alt=""/>
          <div>
            <div>
              <span>王腾</span>
              <img className="redStarImg" src={RedStarImg} alt=""/>
            </div>
            <div>
              <img src={YellowStaImg} alt=""/>
              <img src={YellowStaImg} alt=""/>
              <img src={YellowStaImg} alt=""/>
              <img src={YellowStaImg} alt=""/>
              <img src={YellowStaImg} alt=""/>
              <span className="grade">5.0分</span>
              <span className="student">4032学员</span>
            </div>
          </div>
        </div>
        <div className="auth">   
          <div>
            <img src={AuthImg} alt=""/>
            <span>身份证</span>
            <span>驾驶证</span>
            <span>行驶证</span>
          </div>
          <div>
            <span>尽心尽责</span>
            <span>技术高超</span>
            <span>专业教学</span>
            <span>和蔼可亲</span>
          </div>
        </div>
      </InfoContainer>
    );
  }
}

export default Info;
