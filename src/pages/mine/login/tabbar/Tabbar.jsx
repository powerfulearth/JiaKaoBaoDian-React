import React, { Component } from 'react'

import { TabbarContent } from './styledTabbar'

// import { withRouter } from 'react-router-dom'

class TabbarContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dir: 'right'
    }
    this.handleClickChange = this.handleClickChange.bind(this)
  }

  render() {
    let { dir } = this.state
    return (
      <TabbarContent>
      <ul className="tabbar">
        <li onClick={() => {this.handleClickChange('left')}} className={dir==='left' ? 'active' : ''}>
          账号登录
        </li>
        <li className="mid"> | </li>
        <li className="active" onClick={() => {this.handleClickChange('right')}} className={dir==='right' ? 'active' : ''}>
          手机号登录
        </li>
      </ul>
    </TabbarContent>
    )
  }

  handleClickChange(dir) {
    this.setState({
      dir
    })
    
  }
}

export default TabbarContainer