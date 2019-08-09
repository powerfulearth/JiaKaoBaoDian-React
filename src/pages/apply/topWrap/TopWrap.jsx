
import React, { Component } from 'react';

import {TopWrapContainer} from './StyledTopWrap';
import Header from './header/Header';
import Nav from './nav/Nav';

class TopWrap extends Component {
  render() {
    return (
      <TopWrapContainer>
        <Header></Header>
        <Nav></Nav>
      </TopWrapContainer>
    );
  }
}

export default TopWrap;

