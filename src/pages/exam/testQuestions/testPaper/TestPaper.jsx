import React, { Component } from 'react';
import { connect } from 'react-redux'
import { asyncLoadData, selected } from './actionCreator'

import TestPaperUI from './TestPaperUI'

import bScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import './paper.css';

class TestPaper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      examList: [],
      didHistory: {},
      currentQuestion:1,
      TotalQuestion:0,
    }
  }

  componentWillReceiveProps(props, state) {
    this.setState({
      list: props.list
    })
  }

  render() {
    return (
      <TestPaperUI
        {...this.props}
        examList={this.state.examList}
        choose={this.choose.bind(this)}
        popupMenu={this.popupMenu.bind(this)}
        backMenu={this.backMenu.bind(this)}
        currentQuestion={this.state.currentQuestion}
        TotalQuestion={this.state.TotalQuestion}
      >

      </TestPaperUI>
    );
  }

  choose(e) {
    let id = e.target.parentNode.parentNode.getAttribute("data-id")
    if (id in this.state.didHistory) {
      alert("做过了")
    } else {

      let userSelected = e.target.getAttribute('data-selected')
      let answer = e.target.parentNode.parentNode.getAttribute('data-answer')
      let didHistory = this.state.didHistory
      e.target.parentNode.children[0].innerHTML = ''
      console.log(answer);
      if (userSelected === answer) {
        console.log("对了");
        didHistory[id] = true
        this.setState({
          didHistory
        })
        e.target.parentNode.children[0].className = 'isTrue'
        //进行做题记录保存
        this.props.selected('true',{
          id,
          answer,
          userSelected
        })

        
      } else {
        console.log("错了");
        didHistory[id] = false
        this.setState({
          didHistory
        })
        e.target.parentNode.children[0].className = 'isFalse'
        e.target.parentNode.parentNode.children[answer-1].children[0].className='isTrue'
        e.target.parentNode.parentNode.children[answer-1].children[0].innerHTML=''
        // 进行错题记录保存
        this.props.selected('false',{
          id,
          answer,
          userSelected
        })

      }
    }
    console.log(this.state.didHistory);
  }

  popupMenu() {
    document.querySelector('.menuBottom').style.height = '3rem'
    document.querySelector('.bg').style.display = 'block'
  }

  backMenu(e) {
    document.querySelector('.menuBottom').style.height = '0'
    document.querySelector('.bg').style.display = 'none'
  }

  componentDidMount() {
    
    if (this.props.match.params) {
      this.setState({
        type: this.props.match.params.type
      })
      this.props.loadData(this.props.match.params.type)
    }

    setTimeout(() => {
      let that = this
      let index = 0
      let realIndex=1
      let TotalQuestion = this.state.list.length
      this.setState({
        TotalQuestion
      })
      let result = this.state.list
      console.log(result);
      this.setState({
        examList: result.slice(0, 3)
      })
      new bScroll('.container', {
        click: true
      })
      let examSwiper = new Swiper('.container', {
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: false,//修改swiper的父元素时，自动初始化swiper
        on: {
          slideNextTransitionStart: function () {
            console.log("前进");
            console.log(this.$wrapperEl.find('.swiper-slide-active')[0].id);
            if(realIndex<TotalQuestion){
              realIndex++
            }
            that.setState({
              currentQuestion:realIndex
            })
            console.log(realIndex);
            if (index >= 1) {
              this.activeIndex = 1
              let list = result.slice(index, index + 3)
              that.setState({
                examList: list
              })
            }
            if (index < result.length - 3) {
              index++
              return
            }
          },
          slidePrevTransitionStart: function () {
            console.log("返回");
            console.log(this.$wrapperEl.find('.swiper-slide-active'));
            if(realIndex>1){
              realIndex--
            }
            console.log(realIndex);
            that.setState({
              currentQuestion:realIndex
            })
            if (index > 0) {
              index--
              this.activeIndex = 1
              let list = result.slice(index, index + 3)
              that.setState({
                examList: list,
              })
            }
          }
        }
      })
    }, 2000)
  }

  componentWillUnmount() {
    console.log("答题界面卸载");
    this.props.loadData("")
  }

}


const mapState = state => ({
  list: state.testPaper.list,
  isTab: state.testHeader.isTab,
  select: state.testPaper.select,
  orderExam: state.testPaper.orderExam,
  right:state.testPaper.right,
  error:state.testPaper.error
})
const mapDispatch = dispatch => ({
  loadData(type) {
    dispatch(asyncLoadData(type))
  },
  selected(type, select) {
    dispatch(selected(type, select))
  },

})

export default connect(mapState, mapDispatch)(TestPaper)