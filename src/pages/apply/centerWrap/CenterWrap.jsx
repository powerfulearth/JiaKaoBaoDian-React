import React, { Component } from 'react';

import {CenterWrapContainer} from './StyledCenterWrap';
import SortTitle from './sortTitle/SortTitle';

class CenterWrap extends Component {
  render() {
    return (
      <CenterWrapContainer>
        <SortTitle></SortTitle>
      </CenterWrapContainer>
    );
  }
}

export default CenterWrap;
