import React, { Component } from 'react';

import {HeaderContainer} from './StyledHeader';
import B_arrow from '../../../../assets/images/apply/b_arrow.png';
import Search from '../../components/search/Search';

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <div className="bj">
          北京
          <img src={B_arrow} alt=""/>
        </div>
        <Search></Search>
      </HeaderContainer>
    );
  }
}

export default Header;
