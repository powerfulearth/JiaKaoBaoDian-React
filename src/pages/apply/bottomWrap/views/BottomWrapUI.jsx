import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import JiaxiaoImg from '../../../../assets/images/apply/jiaxiao.png';


class BottomWrapUI extends Component {
  
  render() {
    const data = this.props.list[0]
    return (
      <Link to="/apply/jxdetail">
        <img src={JiaxiaoImg} alt=""/>
        <div className="nm">
          <span>{data === undefined ? '' : data.schoolName}</span>
          <div>4.8分</div>
          <div className="price">
            <span>{data === undefined ? '' : data.list[0].price}</span>
            <span>C1</span>
            <span>{data === undefined ? '' : data.list[0].classesName}</span>
          </div>
        </div>
        <div className="distance">
          <span>规模指数100</span>
          <span>35km</span>
        </div>
      </Link>
    );
  }
}



export default BottomWrapUI;
