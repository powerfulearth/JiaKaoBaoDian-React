import React, { Component } from 'react';

import http from '../../util/http'

import SpecialTestUI from './SpecialTestUI'

class SpecialTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: []
    }
  }
  
  render() {
    return (
      <SpecialTestUI type={this.state.type}>
        
      </SpecialTestUI>
    );
  }

  async componentDidMount() {
    let result = await http('https://api.myjson.com/bins/lhsfh')
    this.setState({
      type: result
    })
  }

}

export default SpecialTest;