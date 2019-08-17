import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { StyledExamTabNavContainer } from './StyledExamTabNav'

import { connect } from 'react-redux'


class ExamHeader extends Component {
  render() {
    return (
      <StyledExamTabNavContainer>
        {console.log(this.props)}
        <div className="tabBox">
          <ul className="tabNav">
            <li className="item" onTouchEnd={() => this.props.history.push(`/exam/specialTest/${this.props.currentPage}`)}>
              <img src={require('assets/images/exam/one/专项练习.png')} alt="" />
              <p>专项练习</p>
            </li>
            <li className="item" onTouchEnd={() => this.props.history.push(`/exam/myError/${this.props.currentPage}`)}>
              <img src={require('assets/images/exam/one/我的错题.png')} alt="" />
              <p>我的错题</p>
            </li>
            <li className="item">
              <img src={require('assets/images/exam/one/图标技巧.png')} alt="" />
              <p>图标技巧</p>
            </li>
            <li className="item">
              <img src={require('assets/images/exam/one/VIP课程.png')} alt="" />
              <p>VIP课程</p>
            </li>
            <li className="item">
              <img src={require('assets/images/exam/one/学员惠购.png')} alt="" />
              <p>学员惠购</p>
            </li>
            <li className="item">
              <img src={require('assets/images/exam/one/随机练习.png')} alt="" />
              <p>随机练习</p>
            </li>
            <li className="item" onTouchEnd={() => this.props.history.push(`/exam/problemBook/${this.props.currentPage}`)}>
              <img src={require('assets/images/exam/one/难题功课.png')} alt="" />
              <p>难题功课</p>
            </li>
            <li className="item">
              <img src={require('assets/images/exam/one/考试秘籍.png')} alt="" />
              <p>考试秘籍</p>
            </li>
          </ul>
        </div>
      </StyledExamTabNavContainer>
    );
  }

  itemDetail() {
    
  }


  componentDidMount() {

  }
}

const mapState = (state) => ({
  currentPage:state.indexReducer.currentPage,
})


export default connect(mapState, null)(withRouter(ExamHeader))