import React from 'react';
import classNames from 'classnames';
// import { Toast } from 'antd-mobile';
import { StyledTestPaper, StyledTestBottom } from './StyledTestPaper'

export default (props) => {
  console.log(props);
  let didHistory = localStorage.getItem('didHistory')
  console.log(JSON.parse(didHistory));
  return (
    <>
      <StyledTestPaper>
        <div className="container swiper-container">
          <div className="container_scroll swiper-wrapper">
            {props.examList.map(value => (
              <div id={value.id} className="swiper-slide" key={value.id}>
                <div className="testTitle">
                  <span className="testType">
                    题目
                  </span>
                  {/* <p className="testText">驾驶机动车在道路上<i>违反道路交通安全法</i>的行为，属于什么行为</p> */}
                  <p className="testText">{value.question}</p>
                </div>
                {value.url ? (
                  <div className="picture">
                    <img src={`${value.url}`} alt="" />
                  </div>)
                  : ''
                }
                <div className="options" data-id={value.id} data-answer={value.answer}>
                  <div className="row"  >
                    <span className="letter">A</span>
                    <span className="content" data-selected="1"  onTouchEnd={(e) => {props.choose(e)}} >{value.item1}</span>
                  </div>
                  <div className="row" >
                    <span className="letter">B</span>
                    <span className="content"  data-selected="2"  onTouchEnd={(e) => {props.choose(e)}}>{value.item2}</span>
                  </div>
                  {
                    value.item3?
                    (
                      <div className="row" >
                        <span className={classNames(['letter'])} >C</span>
                        <span className="content"  data-selected="3"  onTouchEnd={(e) => {props.choose(e)}}>{value.item3}</span>
                      </div>
                    )
                    :''
                  }
                  {
                    value.item4?
                    (
                      <div className="row" >
                        <span className="letter">D</span>
                        <span className="content"  data-selected="4"  onTouchEnd={(e) => {props.choose(e)}}>{value.item4}</span>
                      </div>
                    )
                    :''
                  }
                </div>
                {props.isTab === 2 ? (
                  <div className="error">
                    <div className="answer">
                      <div className="answer_option">
                        答案<i>{(() => {
                          switch (value.answer) {
                            case "1": return 'A';
                            case "2": return 'B';
                            case "3": return 'C';
                            case "4": return 'D';
                            default: break;
                          }
                        })()}</i>
                      </div>
                      <p className="reportError">报错</p>
                    </div>
                    <div className="detail">
                      <h3 className="detail_title">试题详解</h3>
                      <p className="detail_content">{value.explains}</p>
                      {/* <div className="main">
                        <p className="main_text">考点</p>
                        <p className="main_content">追究责任</p>
                      </div>
                      <div className="difficulty">
                        <p className="difficulty_text">难度</p>
                        <p className="difficulty_content">
                          <span></span>
                        </p>
                        <div className="probability">
                          <p className="probability_text">答错率</p>
                          <p className="probability_num">19.7%</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                ) : ''}
              </div>
            ))}
          </div>
        </div>
      </StyledTestPaper>
      <StyledTestBottom>
        <div className="menuTop">
          <div className="b_left">
            <span className="pic"></span>
            <span className="text">收藏</span>
          </div>
          <div className="b_right" onTouchEnd={props.popupMenu}>
            <div className="true">
              <span className="pic"></span>
              <span className="num">{
                Object.keys(JSON.parse(localStorage.getItem('didHistory'))).length
              }</span>
            </div>
            <div className="false">
              <span className="pic"></span>
              <span className="num">{Object.keys(JSON.parse(localStorage.getItem('errorHistory'))).length}</span>
            </div>
            <div className="menu">
              <span className="pic"></span>
              <span className="num">
                <i className="done">{props.currentQuestion}</i>
                /
                <i className="total">{props.TotalQuestion}</i>
              </span>
            </div>
          </div>
        </div>
        <div className="menuBottom">
          <ul>
            {props.list.map((value, index) => (
              <li className="queNum" key={value.id}>{index+1}</li>
            ))}
          </ul>
        </div>
      </StyledTestBottom>
      <div className="bg" onTouchEnd={e=>props.backMenu(e)}></div>
    </>
  )
}