import React, { Component } from 'react';

import {ClassTypeContainer} from './StyledClassTypeContainer';

class ClassType extends Component {
  render() {
    return (
      <ClassTypeContainer>
        <div className="classType">
          <div>
            <p>
              <span>C1</span>
              <span>普通班</span>
              <span>￥5600</span>
            </p>
            <p>  
              <span>45天拿本</span>
              <span>班车接送</span>
              <span>一人一车</span>
            </p>
          </div>
          <a href="#" >
             免费咨询
          </a>
        </div>
      </ClassTypeContainer>
    );
  }
}

export default ClassType;
