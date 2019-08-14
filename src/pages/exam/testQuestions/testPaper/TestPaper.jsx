import React, { Component } from 'react';
import {connect} from 'react-redux'
import { asyncLoadData, trueSelect, falseSelect } from './actionCreator'

import TestPaperUI from './TestPaperUI'

import http from '../../../../util/http'
import bScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

class TestPaper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      examList: [],
    }
  }
  render() {
    return (
      <TestPaperUI { ...this.props } examList={this.state.examList} choose={this.choose.bind(this)}>

      </TestPaperUI>
    );
  }

  choose(index, id, answer, chapter) {
    if(index+1 === answer) {
      let select = {
        chapter,
        id,
        index,
        answer,
        isRight: true
      }
      this.props.true(select)
    } else {
      let select = {
        chapter,
        id,
        index,
        answer,
        isRight: false
      }
      this.props.false(select)
    }
    setTimeout(() => {
      if(!localStorage.getItem('orderExam')) {
        let arr = []
        arr.push(this.props.select)
        localStorage.setItem('orderExam', JSON.stringify(arr))
      } else {
        let arr = JSON.parse(localStorage.getItem('orderExam'))
        let _index = arr.findIndex(item => {
          return item.id == this.props.select.id
        });
        if(_index === -1) {
          arr.push(this.props.select)
          localStorage.setItem('orderExam', JSON.stringify(arr))
        }
      }
      document.querySelector("#'1-1'")
    },200)
    
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
    new Swiper('.container', {
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
  }
}


const mapState = state =>({
  list: state.testPaper.list,
  isTab: state.testHeader.isTab,
  select: state.testPaper.select,
  orderExam: state.testPaper.orderExam
})
const mapDispatch = dispatch => ({
  loadData: dispatch(asyncLoadData()),
  true(select, orderExam) {
    dispatch(trueSelect(select, orderExam))
  },
  false(select, orderExam) {
    dispatch(falseSelect(select, orderExam))
  }
})

export default connect(mapState, mapDispatch)(TestPaper);