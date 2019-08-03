import React, { Component } from 'react';

import ExamTestUI from './ExamTestUI'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

class ExamTest extends Component {
  render() {
    return (
      <ExamTestUI>
        
      </ExamTestUI>
    );
  }

  componentDidMount() {
    console.log(1);
    new Swiper('.swiper-container', {
      initialSlide: 1,
      slidesPerView: '3',
      spaceBetween: -40,
      centeredSlides: true
    })
  }
}

export default ExamTest;