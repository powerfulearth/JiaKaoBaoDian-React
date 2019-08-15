import React, { Component } from 'react';
import { withRouter} from "react-router-dom";

import Larrow from '../../../../assets/images/apply/back.png';
import ThreeImg from '../../../../assets/images/apply/三点.png';

import {HeadContainer} from './StyledHeaderContainer';

class Header extends Component {
  render() {
    return (
      <HeadContainer>
        教练详情
        <img className="backImg" src={Larrow} onClick={()=>{this.props.history.goBack()}} alt="回退按钮"/>
        <img className="threeImg" src={ThreeImg} alt=""/>
      </HeadContainer>
    );
  }
}

export default withRouter(Header);
