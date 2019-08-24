import React, { Component } from 'react';

import {ContentContainer} from './StyledContentContainer';

import ClassType from '../../components/classType/ClassType';

class Content extends Component {
  render() {
    return (
      <ContentContainer>
        <p>东方时尚驾校</p>
        <p>选对班型，立即报名</p>
        <ClassType></ClassType>
        <ClassType></ClassType>
        <ClassType></ClassType>
        <ClassType></ClassType>
        <ClassType></ClassType>
        <ClassType></ClassType>
        <ClassType></ClassType>
        <ClassType></ClassType>
        <ClassType></ClassType>
        <ClassType></ClassType>
      </ContentContainer>
    );
  }
}

export default Content;
