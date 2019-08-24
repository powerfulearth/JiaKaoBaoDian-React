import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {NavContainer} from './StyledNav';
import NavImg from '../../../../assets/images/apply/nav1.png';
import NavImg2 from '../../../../assets/images/apply/教练排行.png';
import NavImg3 from '../../../../assets/images/apply/陪练服务.png';
import NavImg4 from '../../../../assets/images/apply/学车流程.png';
import NavImg5 from '../../../../assets/images/apply/班型选择.png';
import NavImg6 from '../../../../assets/images/apply/免费试学.png';
import NavImg7 from '../../../../assets/images/apply/学车立减.png';
import NavImg8 from '../../../../assets/images/apply/幸运抽奖.png';
import NavImg9 from '../../../../assets/images/apply/驾考指南.png';
import NavImg10 from '../../../../assets/images/apply/驾考锦鲤.png';



class Nav extends Component {
  render() {
    // const data = [{
    //   titles: ["驾校排行" , "教练排行", "陪练服务", "学车流程", "班型选择", "免费试学", "学车立减","幸运抽奖","驾考指南","驾考锦鲤"],
    //   imgs: [NavImg , NavImg2,NavImg3,NavImg4,NavImg5,NavImg6,NavImg7,NavImg8,NavImg9,NavImg10 ]
    // }]
    const data = [
      {titles:"驾校排行",imgs: NavImg},
      {titles:"教练排行",imgs: NavImg2},
      {titles:"陪练服务",imgs: NavImg3},
      {titles:"学车流程",imgs: NavImg4},
      {titles:"班型选择",imgs: NavImg5},
      {titles:"免费试学",imgs: NavImg6},
      {titles:"学车立减",imgs: NavImg7},
      {titles:"幸运抽奖",imgs: NavImg8},
      {titles:"驾考指南",imgs: NavImg9},
      {titles:"驾考锦鲤",imgs: NavImg10}
    ]
    const navList = data.map( (item) => (
                      <Link to="/" key={item.titles.toString()}>
                        <img src={item.imgs} alt=""/>
                        <span>{item.titles}</span>
                      </Link>
                    ))
    return (
      <NavContainer>
          {navList}
      </NavContainer>
    );
  }
}

export default Nav;
