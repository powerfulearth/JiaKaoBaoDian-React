import React, { Component } from 'react';
import { withRouter } from 'react-router-dom' 

import ExamTestUI from './ExamTestUI'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

class ExamTest extends Component {
  render() {
    return (
      <ExamTestUI click={this.click.bind(this)}>

      </ExamTestUI>
    );
  }

  click() {
    this.props.history.push('/test:known')
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

export default withRouter(ExamTest);