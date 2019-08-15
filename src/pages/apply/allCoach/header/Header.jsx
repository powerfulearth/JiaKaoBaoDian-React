import React, { Component } from 'react';
import { withRouter} from "react-router-dom";

import Larrow from '../../../../assets/images/apply/back.png';

import {HeadContainer} from './StyledHeadContainer';

class Header extends Component {
  render() {
    return (
      <HeadContainer>
        全部教练
        <img src={Larrow} onClick={()=>{this.props.history.goBack()}} alt="回退按钮"/>
      </HeadContainer>
    );
  }
}

export default withRouter(Header);
