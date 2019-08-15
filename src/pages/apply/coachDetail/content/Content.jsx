import React, { Component } from 'react';

import {ContentContainer} from './StyledContentContainer';
import ClassType from '../../components/classType/ClassType';
export class Content extends Component {
  render() {
    return (
      <ContentContainer>
        <ul>
          <span></span>
          <li>班型/陪练</li>
          <li>简介</li>
        </ul>
        <ClassType></ClassType>
        <ClassType></ClassType>
        <ClassType></ClassType>
      </ContentContainer>
    );
  }
}

export default Content;
