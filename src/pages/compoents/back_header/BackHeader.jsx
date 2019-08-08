import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { StyledBackHeaderContainer } from './StyledBackHeader'

class BackHeader extends Component {
  render() {
    return (
      <StyledBackHeaderContainer>
        <h3>专项练习</h3>
        <span className="back" onTouchEnd={this.back.bind(this)}></span>
      </StyledBackHeaderContainer>
    )
  }

  back() {
    this.props.history.go(-1)
  }

}

export default withRouter(BackHeader)