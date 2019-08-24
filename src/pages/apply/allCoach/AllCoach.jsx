import React, { Component } from 'react';

import Header from './header/Header';
import Center from './center/Center';
import CoachItem from './coachItem/CoachItem';
import {AllCoachContainer} from './StyledAllCoachContainer';

class AllCoach extends Component {
  render() {
    return (
      <AllCoachContainer>
        <Header></Header>
        <Center></Center>
        <CoachItem></CoachItem>
        <CoachItem></CoachItem>
        <CoachItem></CoachItem>
        <CoachItem></CoachItem>
        <CoachItem></CoachItem>
        <CoachItem></CoachItem>
        <CoachItem></CoachItem>
        <CoachItem></CoachItem>
      </AllCoachContainer>
    );
  }
}

export default AllCoach;
