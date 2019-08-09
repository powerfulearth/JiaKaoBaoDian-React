import React, { Component } from 'react';

import Header from './header/Header';
import  Message  from "./message/Message";
import Footer from "./footer/Footer";
import Content from './content/Content';
import {JxDetailContainer} from './StyledJxDetail';

class JiaXiaoDetail extends Component {
  render() {
    return (
      <JxDetailContainer>
        <Header></Header>
        <Message></Message>
        <Content></Content>
        <Footer></Footer>
      </JxDetailContainer>
    );
  }
}

export default JiaXiaoDetail;
