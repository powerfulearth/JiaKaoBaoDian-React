import React, { Component } from 'react';
import {connect} from 'react-redux'
import { asyncLoadData, trueSelect, falseSelect } from './actionCreator'

import TestPaperUI from './TestPaperUI'
import { TEST_PAGE_ORDER,TEST_PAGE_SIMULATEEXAM,TEST_PAGE_ALLSIMULATE } from './actionTypes'

import http from '../../../../util/http'
import bScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

class TestPaper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      examList: [],
      didHistory:[]
    }
  }
  render() {
    return (
      <TestPaperUI 
        { ...this.props } 
        examList={this.state.examList} 
        choose={this.choose.bind(this)} 
        popupMenu={this.popupMenu.bind(this)}
        backMenu={this.backMenu.bind(this)}
      >

      </TestPaperUI>
    );
  }

  choose(e) {
    let userSelected = e.target.getAttribute('data-selected')
    let answer = e.target.getAttribute('data-answer')
    userSelected===answer?
    console.log("对了")
    :
    console.log("错了");
  }

  popupMenu() {
    document.querySelector('.menuBottom').style.height = '3rem'
    document.querySelector('.bg').style.display = 'block'
  }

  backMenu(e) {
    document.querySelector('.menuBottom').style.height = '0'
    document.querySelector('.bg').style.display = 'none'
  }

  async componentDidMount() {
    let that = this
    let index = 0
    let result = await http('https://api.myjson.com/bins/10lkzb')
    this.setState({
      examList: result.slice(0,3)
    })
    new bScroll('.container', {
      click: true
    })    
    let examSwiper = new Swiper('.container', {
      observer: true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents: false,//修改swiper的父元素时，自动初始化swiper
      on:{
        slideNextTransitionEnd: function() {
          if(index >= 1) {
            this.activeIndex = 1
            let list = result.slice(index, index+3)
            that.setState({
              examList: list
            })
          }
          if(index<result.length-3) {
            index++
            return
          }
        },
        slidePrevTransitionEnd: function() {
          if(index>0) {
            index--
            this.activeIndex = 1
            let list = result.slice(index, index+3)
            that.setState({
              examList: list
            })
          }
        }
      }
    })
    
    if(this.props.match.params){
      this.setState({
        type:this.props.match.params.type
      })
      this.props.loadData(this.props.match.params.type)
    }
  }

  componentWillUnmount(){
    console.log("答题界面卸载");
    this.props.loadData("")
  }
    
}


const mapState = state =>({
  list: state.testPaper.list,
  isTab: state.testHeader.isTab,
  select: state.testPaper.select,
  orderExam: state.testPaper.orderExam
})
const mapDispatch = dispatch => ({
  loadData(type){
    dispatch(asyncLoadData(type))
  },
  true(select, orderExam) {
    dispatch(trueSelect(select, orderExam))
  },
  false(select, orderExam) {
    dispatch(falseSelect(select, orderExam))
  }
})

export default connect(mapState, mapDispatch)(TestPaper)