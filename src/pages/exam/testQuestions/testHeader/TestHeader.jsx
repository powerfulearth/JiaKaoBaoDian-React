import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { headerTab } from './actionCreator'

import TestHeaderUI from './TestHeaderUI.jsx'

class TestHeader extends Component {
  render() {
    return (
      <TestHeaderUI { ...this.props }  back={this.back.bind(this)} tab={this.tab.bind(this)}>
      </TestHeaderUI>
    )
  }

  back() {
    this.props.history.go(-1)
  }

  tab(isTab) {
    this.props.tab(isTab)
  }

  componentDidMount() {
    
  }
}

const mapStateToProps = (state) => ({
  isTab: state.testHeader.isTab
})

const mapDispatch = (dispatch) => ({
  tab(isTab) {
    dispatch(headerTab(isTab))
  }
})


export default connect(mapStateToProps, mapDispatch)(withRouter(TestHeader));