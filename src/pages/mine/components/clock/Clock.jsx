import React, { Component } from 'react'

import { ClockContainer } from './StyledClock.js'

export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 60,
      liked: true,
    }

    this.handleClick = this.handleClick.bind(this)
    this.countDown = this.countDown.bind(this)
  }


  render() {
    return (
      <ClockContainer>
        | <span onClick={this.handleClick}>
          {
            this.state.liked
              ? '获取验证码'
              : `${this.state.count} 秒后重发`
          }
        </span></ClockContainer>
    )
  }

  componentDidMount(){
    // this.props.onRef(this)
   
  }

  componentWillUnmount() {
   
  }

  
  handleClick() {
    // const {sendMsg} = this.props;
    const {liked} = this.state;
    if (!liked) {
      return;
    }
    this.countDown();
    this.createCode();
  }


  countDown() {
    const {count} = this.state;
    if (count === 1) {
      this.setState({
        count: 60,
        liked: true,
      });
    } else {
      this.setState({
        count: count - 1,
        liked: false,
      });
      setTimeout(this.countDown.bind(this), 1000);
    }
  }

  createCode() {
    let code = Math.floor(Math.random()*899999 + 100000)
    alert(code)
  }
}
