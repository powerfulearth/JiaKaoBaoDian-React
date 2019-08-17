import React from 'react'

import { StyledMyCollectionsContainer } from './StyledMyCollections'

const RandomColor = () => {
  return "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 10) + ')';
}
const BackGround = {
  background: `${RandomColor()}`
}

export default (props) => (
  <StyledMyCollectionsContainer>
    <header>
      <div className="back" onTouchEnd={props.back}>
        <img src={require('assets/images/exam/test/back.png')} alt=""/>
      </div>
      <ul className="nav">
        <li className="navItem active">试题</li>
        <li className="navItem">驾校</li>
        <li className="navItem">车型</li>
        <li className="navItem">订阅</li>
      </ul>
    </header>
    <section>
      <div className="notHave">暂无内容~</div>
      <ul className="content">
        <li className="item">
          <span className="circle" style={BackGround}></span>
          <p className="text">
            1.驾驶机动车在道路上违反道路交通安全法的行为， 属于什么行为？
          </p>
        </li>
        <li className="item">
          <span className="circle" style={BackGround}></span>
          <p className="text">
            1.驾驶机动车在道路上违反道路交通安全法的行为， 属于什么行为？
          </p>
        </li>
        <li className="item">
          <span className="circle" style={BackGround}></span>
          <p className="text">
            1.驾驶机动车在道路上违反道路交通安全法的行为， 属于什么行为？
          </p>
        </li>
        <li className="item">
          <span className="circle" style={BackGround}></span>
          <p className="text">
            1.驾驶机动车在道路上违反道路交通安全法的行为， 属于什么行为？
          </p>
        </li>
      </ul>
    </section>
  </StyledMyCollectionsContainer>
)