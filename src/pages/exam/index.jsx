import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';

import { StyledIndexContainer } from './StyledIndex.js'

import One from './one/One'
import Two from './two/Two'
import Three from './three/Three'
import Four from './four/Four'
import TakeThis from './takeThis/TakeThis'

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs : [
        { title: '科一' },
        { title: "科二" },
        { title: "科三" },
        { title: "科四" },
        { title: "拿本" },
      ]
    }
  }
  render() {
    return (
      <StyledIndexContainer>
        <header>
          <h3>驾考宝典</h3>
          <p>
            北京
            <span className="iconfont icon-unfold"></span>
          </p>
        </header>
        <Tabs tabs={this.state.tabs}
          initialPage={0}
        >
          <div>
            <One></One>
          </div>
          <div>
            <Two></Two>
          </div>
          <div>
            <Three></Three>
          </div>
          <div>
            <Four></Four>
          </div>
          <div>
            <TakeThis></TakeThis>
          </div>
        </Tabs>
      </StyledIndexContainer>  
    )
  }
}

export default index;