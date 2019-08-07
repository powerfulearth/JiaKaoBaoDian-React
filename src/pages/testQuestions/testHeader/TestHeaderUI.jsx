import React from 'react';

import { StyledTestHeaderContainer } from './StyledTestHeader'

export default (props) => (
  <StyledTestHeaderContainer>
    {console.log(props.isTab)}
    <div className="back" onTouchEnd={props.back}></div>
    <div className="tab">
      <div className={"left" + (props.isTab === 1 ? ' active' : '')} onTouchEnd={props.tab.bind('', 1)}>
        答题模式
      </div>
      <div className={"right" + (props.isTab === 2 ? ' active' : '')} onTouchEnd={props.tab.bind('', 2)}>
        背题模式
      </div>
    </div>
  </StyledTestHeaderContainer>
)