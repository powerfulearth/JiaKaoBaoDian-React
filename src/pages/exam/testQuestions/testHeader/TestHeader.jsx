import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { headerTab } from './actionCreator'

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
    setTimeout(() => {
      this.setState({
        isTab
      })
      this.props.tab(this.state.isTab)
    }, 0)
  }

  componentDidMount() {
    
  }
}

const mapStateToProps = (state) => ({
  _isTab: state.testHeader._isTab
})

const mapDispatch = (dispatch) => ({
  tab(_isTab) {
    dispatch(headerTab(_isTab))
  }
})

export default connect(mapStateToProps, mapDispatch)(withRouter(TestHeader));