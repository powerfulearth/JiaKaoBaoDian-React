import React from 'react';
import { StyledProblemBookContainer } from './StyledProblemBook'

const bgGround = {
  background: `url(${require('assets/images/exam/problemBook/wenhao_bg.png')}) no-repeat 2.03rem 1.89rem #fff`,
  backgroundSize: '1.44rem 1.64rem'
}

export default (props) => (
  <StyledProblemBookContainer>
    <header>
      <div className="back" onTouchEnd={props.back}>
        <img src={require('assets/images/exam/test/back.png')} alt=""/>
      </div>
      <h3>难题功课</h3>
    </header>
    <section style={bgGround}>
      <div className="title">
        <img src={require('assets/images/exam/problemBook/wenhao.png')} alt=""/>
        <span className="text">常见问题</span>
      </div>
      <ul className="problemList">
        <li className="item">
          如何打开夜间模式？如何调整字体大小？
        </li>
        <li className="item">
          怎么切换科一和科四题库？怎样修改考本类型？
        </li>
        <li className="item">
          怎样修改驾校信息？怎样修改手机号？
        </li>
        <li className="item">
          下载的视频找不到？
        </li>
        <li className="item">
          如何打开夜间模式？如何调整字体大小？
        </li>
        <li className="item">
          怎么切换科一和科四题库？怎样修改考本类型？
        </li>
        <li className="item">
          怎样修改驾校信息？怎样修改手机号？
        </li>
        <li className="item">
          下载的视频找不到？
        </li>
      </ul>
      <div className="feedbackBtn">均不是,我要反馈</div>
    </section>
  </StyledProblemBookContainer>
)