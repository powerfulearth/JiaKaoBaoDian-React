import React, { Component } from 'react'

import { TabbarContent } from './styledTabbar'

import { withRouter } from 'react-router-dom'

class TabbarContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dir: 'right'
    }
  }

  render() {
    return (
      <TabbarContent>
      <ul className="tabbar">
        <li>
          账号登录
        </li>
        <li className="mid"> | </li>
        <li className="active">
          手机号登录
        </li>
      </ul>
    </TabbarContent>
    )
  }
}

export default withRouter(TabbarContainer)