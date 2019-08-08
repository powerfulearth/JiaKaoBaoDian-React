import React, { Component } from 'react';
import { withRouter } from 'react-router-dom' 

import ExamTabNavUI from './ExamTabNavUI'


class ExamHeader extends Component {
  render() {
    return (
      <ExamTabNavUI itemDetail={this.itemDetail.bind(this)}>
      </ExamTabNavUI>
    );
  }

  itemDetail() {
    this.props.history.push('/specialTest')
  }


  componentDidMount() {
    
  }
}

export default withRouter(ExamHeader)