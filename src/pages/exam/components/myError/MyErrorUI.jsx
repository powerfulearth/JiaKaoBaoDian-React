import React from 'react'

import { StyledMyErrorContainer } from './StyledMyError'

const bgGround={
  background: `url(${require('assets/images/exam/myError/bg.png')}) no-repeat center top #fff`,
  backgroundSize: '3.13rem 1.71rem'
}

export default (props) => (
  <StyledMyErrorContainer>
    <header>
      <div className="back" onTouchEnd={props.back}>
        <img src={require('assets/images/exam/test/back.png')} alt=""/>
      </div>
      <h3>我的错题</h3>
    </header>
    <section>
      <div className="errorBg" style={bgGround}>
        <div className="errorNum">
          <p className="num">0</p>
          <p className="text">错题数</p>
        </div>
      </div>
      <div className="todayError">
        <div className="bgWhite">
          <div className="errorNum">
            <img src={require('assets/images/exam/myError/todayError.png')} alt=""/>
            <div className="text">
              <p className="num">今日错题0题</p>
              <p className="learn">现在巩固，更有利于记忆哟</p>
            </div>
          </div>
          <div className="errorBtn">
            巩固错题
          </div>
        </div>
      </div>
      <div className="mastersCourse">
        <div className="course">
          <img className="pic" src={require('assets/images/exam/myError/课程.png')} alt=""/>
          <div className="text">
            <p className="top">名师课程，减少错题</p>
            <p className="bottom">提高考试提高率</p>
          </div>
          <div className="btn">
            <img src={require('assets/images/exam/myError/去看看.png')} alt=""/>
          </div>
        </div>
      </div>
      <div className="errorPractice">
        <div className="header">
          <h4>错题练习</h4>
          <div className="clear">
            <img src={require('assets/images/exam/myError/移除.png')} alt=""/>
            <p className="text">移除</p>
          </div>
        </div>
        <div className="notHave">
          暂无错题，继续保持~
        </div>
        <ul className="errorContent">
          <li className="errorItem">
            <p className="text">
              1、道路交通安全法律、法规和规章
            </p>
            <img src={require('assets/images/exam/myError/more.png')} alt=""/>
          </li>
          <li className="errorItem">
            <p className="text">
              1、道路交通安全法律、法规和规章
            </p>
            <img src={require('assets/images/exam/myError/more.png')} alt=""/>
          </li>
          <li className="errorItem">
            <p className="text">
              1、道路交通安全法律、法规和规章
            </p>
            <img src={require('assets/images/exam/myError/more.png')} alt=""/>
          </li>
        </ul>
      </div>
    </section>
  </StyledMyErrorContainer>
)