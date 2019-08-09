import React, { Component } from 'react';
import {connect} from 'react-redux'
import { asyncLoadData } from './actionCreator'

import TestPaperUI from './TestPaperUI'

import bScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

class TestPaper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: '',
      isRight: ''
    }
  }
  render() {
    return (
      <TestPaperUI { ...this.props } choose={this.choose.bind(this)} index={this.state.index} isRight={this.state.isRight}>

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
  }

}


const mapState = state =>({
  list: state.testPaper.list,
  _isTab: state.testHeader._isTab
})
const mapDispatch = dispatch => ({
  loadData: dispatch(asyncLoadData())
})

export default connect(mapState, mapDispatch)(TestPaper);