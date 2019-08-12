import React, { Component } from 'react';

import {SortContainer} from './StyledSort';

class SortTitle extends Component {
  render() {
    return (
      <SortContainer>
        <span>综合排序</span>
        <span>价格排序</span>
        <span>评分排序</span>
      </SortContainer>
    );
  }
}

export default SortTitle;
