import React, { Component } from 'react';
import MyCollectionsUI from './MyCollectionsUI'

class MyCollections extends Component {
  render() {
    return (
      <MyCollectionsUI back={this.back.bind(this)}>
        
      </MyCollectionsUI>
    );
  }

  back() {
    this.props.history.go(-1)
  }
}

export default MyCollections;

