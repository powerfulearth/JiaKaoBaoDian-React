import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Route} from 'react-router-dom';

import TestPaper from '../testQuestions/testPaper/TestPaper'
import {StyledPracticeExams} from './StyledPracticeExams';

class PracticeExams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        minute: '10',
        second: '00'
      }
    }
  }
  
  render() {
    return (
      <StyledPracticeExams>
        <header>
          <div className="back" onTouchEnd={this.back.bind(this)}>
            <img src={require('assets/images/exam/test/back.png')} alt=""/>
          </div>
          <h3>倒计时 {this.state.time.minute}:{this.state.time.second}</h3>
        </header>
        <Route path="/exam/practiceExams/:page/:type" component={TestPaper} />
      </StyledPracticeExams>
    )
  }

  componentDidMount() {
    let time = this.state.time
    let start_time = time.minute * 60 * 1000 + time.second * 1000
    this.timer = setInterval(() => {
      if(start_time >= 1000) {
        start_time -= 1000
        let minute = Math.floor((start_time / 1000 / 60) % 60);
        let second = Math.floor(start_time / 1000 % 60);
        this.setState({
          time: {
            minute: minute < 10 ? "0" + minute : minute,
            second: second < 10 ? "0" + second : second
          }
        })
      } else {
        clearInterval(this.timer);
      }
    }, 1000)
  }

  //组件卸载取消倒计时
  componentWillUnmount(){
    console.log(1);
    clearInterval(this.timer);
  }

  back() {
    this.props.history.go(-1)
  }
  
  

}

export default withRouter(PracticeExams)