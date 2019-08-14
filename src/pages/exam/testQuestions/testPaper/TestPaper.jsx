import React, { Component } from 'react';
import {connect} from 'react-redux'
import { asyncLoadData } from './actionCreator'
// import { withRouter } from 'react-router-dom';

import TestPaperUI from './TestPaperUI'
import { TEST_PAGE_ORDER,TEST_PAGE_SIMULATEEXAM,TEST_PAGE_ALLSIMULATE } from './actionTypes'

import bScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

class TestPaper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: '',
      isRight: '',
      type:""
    }
  }
  render() {
    return (
      <TestPaperUI { ...this.props }  choose={this.choose.bind(this)} index={this.state.index} isRight={this.state.isRight}>

      </TestPaperUI>
    );
  }

  choose(index, answer, id) {
    if(index+1 === answer) {
      this.setState({
        index,
        isRight: 'true'
      })
    } else {
      this.setState({
        index: '',
        isRight: 'false'
      })
    }
  }

  componentDidMount() {
    new bScroll('.container', {
      click: true
    })    
    new Swiper('.container', {
      observer:true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents:false,//修改swiper的父元素时，自动初始化swiper
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
  _isTab: state.testHeader._isTab
})
const mapDispatch = dispatch => ({
  loadData(type){
    dispatch(asyncLoadData(type))
  }
})

export default connect(mapState, mapDispatch)(TestPaper)