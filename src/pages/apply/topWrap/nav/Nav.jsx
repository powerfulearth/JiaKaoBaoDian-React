import React, { Component } from 'react';

import {NavContainer} from './StyledNav';
import NavImg from '../../../../assets/images/apply/nav1.png';


class Nav extends Component {
  render() {
    const data = {
      titles: ["第1届案" , "第2届案", "第3届案", "第4届案", "第5届案", "第6届案", "第7届案","第8届案","第9届案","第10届案"]
    }
    const navList = data.titles.map( (title) => (
                      <a href="{title.toString()}" key={title.toString()}>
                        <img src={NavImg} alt=""/>
                        <span>{title}</span>
                      </a>
                    ))
    return (
      <NavContainer>
          {navList}
      </NavContainer>
    );
  }
}

export default Nav;
