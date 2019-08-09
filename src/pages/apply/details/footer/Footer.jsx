import React, { Component } from 'react';
import  {FooterContainer} from './StyledFooter';

import HeartImg from "../../../../assets/images/heart.png"

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <img src={HeartImg} alt="心"/>
        <div>免费咨询</div>
      </FooterContainer>
    );
  }
}

export default Footer;
