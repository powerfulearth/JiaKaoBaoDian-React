import React, { Component } from 'react';

import {AllClassContainer} from './StyledAllClassContainer';
import Header from './header/Header';
import Reminder from './reminder/Reminder';
import Content from './content/Content';
class AllClass extends Component {
  render() {
    return (
      <AllClassContainer>
        <Header></Header>
        <Reminder></Reminder>
        <Content></Content>
      </AllClassContainer>
    );
  }
}

export default AllClass;
