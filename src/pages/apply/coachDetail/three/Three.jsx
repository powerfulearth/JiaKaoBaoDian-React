import React, { Component } from 'react';

import {ThreeContainer} from './StyledThreeContainer';


export class Three extends Component {
  render() {
    return (
      <ThreeContainer>
        <div>
          <div>
            <p>海淀</p>
            <p>驾校</p>
          </div>
          <div>
            <p>教学</p>
            <p>语音</p>
          </div>
          <div>
            <p>13节</p>
            <p>可约课程</p>
          </div>
        </div>
      </ThreeContainer>
    );
  }
}

export default Three;
