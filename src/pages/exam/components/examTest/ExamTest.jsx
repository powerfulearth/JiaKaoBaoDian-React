import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExamTestUI from './ExamTestUI'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

const mapState = (state) => ({
  currentPage:state.indexReducer.currentPage,
})

const mapDispatch = (dispatch) => ({
  
})


class ExamTest extends Component {
  render() {
    return (
      <ExamTestUI {...this.props}>
        
      </ExamTestUI>
    );
  }
  componentDidMount() {
    new Swiper('.swiper-container', {
      initialSlide: 1,
      slidesPerView: '3',
      spaceBetween: -40,
      centeredSlides: true,
      // loop: true
    })
  }
}

export default connect(mapState,mapDispatch)(ExamTest)