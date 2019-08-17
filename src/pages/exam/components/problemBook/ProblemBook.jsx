import React, { Component } from 'react';
import ProblemBookUI from './ProblemBookUI'

class ProblemBook extends Component {
  render() {
    return (
      <ProblemBookUI back={this.back.bind(this)}>
      </ProblemBookUI>
    );
  }

  back() {
    this.props.history.go(-1)
  }
}

export default ProblemBook;