import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import TestBottomUI from './TestBottomUI.jsx'

class TestBottom extends Component {
  render() {
    return (
      <TestBottomUI back={this.back.bind(this)}>
      </TestBottomUI>
    )
  }

  back() {
    this.props.history.go(-1)
  }

}

export default withRouter(TestBottom);