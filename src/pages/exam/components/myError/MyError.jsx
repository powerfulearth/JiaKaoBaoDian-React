import React, { Component } from 'react';


import MyErrorUI from './MyErrorUI'


class MyError extends Component {
  render() {
    return (
      <MyErrorUI back={this.back.bind(this)}>
      </MyErrorUI>
    );
  }

  back() {
    this.props.history.go(-1)
  }
}

export default MyError;