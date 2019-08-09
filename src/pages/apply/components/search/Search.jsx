import React, { Component } from 'react';
import { SearchContainer } from './StyledSearch';

import SearchImg from '../../../../assets/images/search.png';

class Search extends Component {
  render() {
    return (
      <SearchContainer>
        <div>
          <img src={SearchImg} alt=""/>
        </div>
        <input type="text" placeholder="搜索驾校/教练" readOnly />
      </SearchContainer>   
    );
  }
}

export default Search;
