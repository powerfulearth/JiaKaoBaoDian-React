import React, { Component } from 'react';

import {CoachDetailContainer} from './StyledCoachDetail';
import Header from './header/Header';
import Info from './info/Info';
import Three from './three/Three';
import Message from './message/Message';
import Content from './content/Content';
import Footer from './footer/Footer';



export class CoachDetail extends Component {
  render() {
    return (
      <CoachDetailContainer>
        <Header></Header>
        <Info></Info>
        <Three></Three>
        <Message></Message>
        <Content></Content>
        <Footer></Footer>
      </CoachDetailContainer>
    );
  }
}

export default CoachDetail;
