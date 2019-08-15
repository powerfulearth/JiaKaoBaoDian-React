import React, { Component } from 'react';

import {FooterContainer} from './StyledFooterContainer';
import YueKeImg from '../../../../assets/images/apply/约课.png';
import FreeImg from '../../../../assets/images/apply/免费咨询.png';

export class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <img src={YueKeImg} alt=""/>
        <img src={FreeImg} alt=""/>
      </FooterContainer>
    );
  }
}

export default Footer;
