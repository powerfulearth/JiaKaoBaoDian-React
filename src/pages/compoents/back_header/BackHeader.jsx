import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { StyledBackHeaderContainer } from './StyledBackHeader'

class BackHeader extends Component {
  render() {
    return (
      <StyledBackHeaderContainer>
        <div className="back" onTouchEnd={this.back.bind(this)}>
          <img src={require('assets/images/exam/test/back.png')} alt=""/>
        </div>
        <h3>专项练习</h3>
      </StyledBackHeaderContainer>
    )
  }

  back() {
    this.props.history.go(-1)
  }

}

export default withRouter(BackHeader)