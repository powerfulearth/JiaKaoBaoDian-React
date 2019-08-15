import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

import {HeadContainer} from './StyledHead'

import LeftArrow from "../../../../assets/images/apply/l_arrow.png"
import ThreePoints from "../../../../assets/images/apply/three_points.png"

class Header extends Component {
  render() {
    return (
      <HeadContainer>
        <img className="leftArrow" onClick={()=>{this.props.history.goBack()}} src={LeftArrow} alt=""/>
        <img className="threePoints" src={ThreePoints} alt=""/>
        <div className="num">
          <span>1/1875</span>
        </div>
      </HeadContainer>
    );
  }
}

export default withRouter(Header);
