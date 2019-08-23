import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {HeaderContainer} from './StyledHeader';
import B_arrow from '../../../../assets/images/apply/b_arrow.png';
import Search from '../../components/search/Search';

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <div className="bj">
        <Link style={{color:'#000'}} to='/apply/cityList/'>北京</Link>
          <img src={B_arrow} alt=""/>
        </div>
        <Search></Search>
      </HeaderContainer>
    );
  }
}

export default Header;
