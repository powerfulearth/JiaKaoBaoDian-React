import React, { Component } from 'react';
import BScroll from 'better-scroll';
import { Toast } from 'antd-mobile';
import axios from 'axios';
import { AxiosProvider, Get } from 'react-axios'

import {FoundContainer} from './StyledFound';
import FoundItemUI from './FoundItemUI';

const axiosInstance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
});


class Found extends Component {

  constructor(props){
    super(props)
    this.state = {
      type:"top"
    }
  }

  render() {
    return (
      <FoundContainer>
        <header>
          <div className="tit">发现</div>
          <div className="search-found">搜索热点资讯</div>
        </header>
        <div className="found-container">
          <div className="found-nav">
            <ul>
              <li type="top" className="active" onClick={this.active.bind(this)} ><div>头条</div></li>
              <li type="tiyu" onClick={this.active.bind(this)} ><div>体育</div></li>
              <li type="yule" onClick={this.active.bind(this)}  ><div>娱乐</div></li>
              <li type="junshi" onClick={this.active.bind(this)}  ><div>军事</div></li>
              <li type="keji" onClick={this.active.bind(this)}  ><div>科技</div></li>
              <li type="caijing" onClick={this.active.bind(this)}  ><div>财经</div></li>
              <li type="shishang" onClick={this.active.bind(this)}  ><div>时尚</div></li>
              <li type="guoji" onClick={this.active.bind(this)}  ><div>国际</div></li>
            </ul>
          </div>
          <div className="found-context">
            <AxiosProvider instance={axiosInstance}>
              <Get url={`/found/${this.state.type}`}>
                {(error, response, isLoading, onReload) => {
                  if (error) return (<div>加载出错···</div>)
                  else if (isLoading) {
                    this.isLoading(true)
                    return (<div></div>)
                  }
                  else if (response) {
                    this.isLoading(false)
                    return (
                      <div className="itemsContainer">
                        <FoundItemUI data={response}></FoundItemUI>
                      </div>
                    )
                  }
                  else return (<div>页面出现问题</div>)
                }}
              </Get>
            </AxiosProvider>
          </div>
        </div>
      </FoundContainer>
    );
  }

  async componentDidMount(){
    new BScroll('.found-nav',{
      scrollX:true,
      click:true
    })
    new BScroll('.found-context',{
      scrollY:true,
      click:true
    })

  }

  active(e){
    // console.log(e.target.parentElement.parentElement.children);
    Array.from(e.target.parentElement.parentElement.children).forEach((ele) => {
      ele.setAttribute('class','')
    })
    e.target.parentElement.setAttribute('class','active')
    console.log(e.target.parentElement.getAttribute('type'));
    this.setState({
      type:e.target.parentElement.getAttribute('type')
    })
  }

  isLoading(isShow){
    if(isShow){
      Toast.loading('加载中···', 0, false)
    }else{
      Toast.hide()
    }
  }

}

export default Found;
