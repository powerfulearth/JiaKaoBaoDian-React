import React from 'react';
// import { Toast } from 'antd-mobile';

import { StyledTestPaper, StyledTestBottom } from './StyledTestPaper'

export default (props) => {
  return (
    <>
      <StyledTestPaper>
        <div className="container swiper-container">
          <div className="container_scroll swiper-wrapper">
            {props.list.map(value => (
              <div id={value.id} className="swiper-slide" key={value.id}>
                <div className="testTitle">
                  <span className="testType">
                    单选题
                        </span>
                  {/* <p className="testText">驾驶机动车在道路上<i>违反道路交通安全法</i>的行为，属于什么行为</p> */}
                  <p className="testText">{value.question}</p>
                </div>
                {value.url ? (
                  <div className="picture">
                    <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1884170963,1847040622&fm=173&app=49&f=JPEG?w=218&h=146&s=FD51E11B5D527453189D2AE80300F026" alt="" />
                  </div>)
                  : ''
                }
                <div className="options">
                  {[value.item1, value.item2, value.item3, value.item4].map((item, index) => (
                    <div className="row" key={index} data-index={index} onTouchEnd={() => { props.choose(index, value.answer, value.id) }}>
                      {props.index === '' ? (
                        <span className="letter">{(() => {
                          switch (index) {
                            case 0: return 'A';
                            case 1: return 'B';
                            case 2: return 'C';
                            case 3: return 'D';
                            default: break;
                          }
                        })()}</span>
                      ) : ''}
                      <span className="content">{item}</span>
                    </div>
                  ))}
                </div>
                {props._isTab === 2 ? (
                  <div className="error">
                    <div className="answer">
                      <div className="answer_option">
                        答案<i>{(() => {
                          switch (value.answer) {
                            case 1: return 'A';
                            case 2: return 'B';
                            case 3: return 'C';
                            case 4: return 'D';
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
        <div className="b_left">
          <span className="pic iconfont icon-shoucang"></span>
          <span className="text">收藏</span>
        </div>
        <div className="b_right">
          <div className="true">
            <span className="pic iconfont icon-roundcheckfill"></span>
            <span className="num">0</span>
          </div>
          <div className="false">
            <span className="pic iconfont icon-roundclosefill"></span>
            <span className="num">0</span>
          </div>
          <div className="menu">
            <span className="pic iconfont icon-caidan"></span>
            <span className="num">
              <i className="done">1</i>
              /
              <i className="total">1334</i>
            </span>
          </div>
        </div>
      </StyledTestBottom>
    </>
  )
}