import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import TestHeaderUI from './TestHeaderUI.jsx'

class TestHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTab: 1
    }
  }
  render() {
    return (
      <TestHeaderUI { ...this.props } isTab={this.state.isTab} back={this.back.bind(this)} tab={this.tab.bind(this)}>
      </TestHeaderUI>
    )
  }

  back() {
    this.props.history.go(-1)
  }
  tab(isTab) {
    // console.log(this);
    this.props.history.push({
      query: {
        isTab
      }
    })
    this.setState({
      isTab
    })
  }
}

export default withRouter(TestHeader);