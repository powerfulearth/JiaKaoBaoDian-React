import React, { Component } from 'react'

import { TabbarContent } from './styledTabbar'

import MyLink from './link/MyLink'

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
        <MyLink url='/mine/login/account'>
          账号登录
        </MyLink>
        <li className="mid"> | </li>
        <MyLink url='/mine/login' className="active" onClick={() => {this.handleClickChange('right')}} className={dir==='right' ? 'active' : ''}>
          手机号登录
        </MyLink>
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