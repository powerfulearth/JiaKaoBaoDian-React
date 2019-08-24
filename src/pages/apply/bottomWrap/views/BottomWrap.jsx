import React, { Component } from 'react';
import { connect } from 'react-redux'

import {BotContainer , BorderItem} from './StyledBotWrapContainer';
import BottomWrapUI from './BottomWrapUI';
import { loadDataAsync } from '../actionCreator';
import {Link} from 'react-router-dom';

import JiaxiaoImg from '../../../../assets/images/apply/jiaxiao.png';


const mapState = state => ({
  list: state
})

const mapDispatch = (dispatch) => ({
  loadData() {
    dispatch(loadDataAsync())
  }
})

class BottomWrap extends Component {
  render() {
    // console.log(this.props.list)
    return (
      <BotContainer>
        <BorderItem hasBorder={true}>
          <BottomWrapUI list={this.props.list.applyReducer.list}></BottomWrapUI>
        </BorderItem>
        <BorderItem hasBorder={true}>
          <Link to="/apply/jxdetail">
            <img src={JiaxiaoImg} alt=""/>
            <div className="nm">
              <span>北方驾校</span>
              <div>4.6分</div>
              <div className="price">
                <span>3200</span>
                <span>C1</span>
                <span>普通班</span>
              </div>
            </div>
            <div className="distance">
              <span>规模指数100</span>
              <span>35km</span>
            </div>
          </Link>
        </BorderItem>
        <BorderItem hasBorder={true}>
          <Link to="/apply/jxdetail">
            <img src={JiaxiaoImg} alt=""/>
            <div className="nm">
              <span>海淀驾校</span>
              <div>4.9分</div>
              <div className="price">
                <span>5800</span>
                <span>C1</span>
                <span>普通班</span>
              </div>
            </div>
            <div className="distance">
              <span>规模指数100</span>
              <span>35km</span>
            </div>
          </Link>
        </BorderItem>
        <BorderItem hasBorder={true}>
          <Link to="/apply/jxdetail">
            <img src={JiaxiaoImg} alt=""/>
            <div className="nm">
              <span>京东府驾校</span>
              <div>4.4分</div>
              <div className="price">
                <span>4800</span>
                <span>C1</span>
                <span>普通班</span>
              </div>
            </div>
            <div className="distance">
              <span>规模指数100</span>
              <span>35km</span>
            </div>
          </Link>
        </BorderItem>
        <BorderItem hasBorder={true}>
          <Link to="/apply/jxdetail">
            <img src={JiaxiaoImg} alt=""/>
            <div className="nm">
              <span>交园驾校</span>
              <div>3.6分</div>
              <div className="price">
                <span>3000</span>
                <span>C1</span>
                <span>普通班</span>
              </div>
            </div>
            <div className="distance">
              <span>规模指数100</span>
              <span>35km</span>
            </div>
          </Link>
        </BorderItem>
        <BorderItem hasBorder={true}>
          <Link to="/apply/jxdetail">
            <img src={JiaxiaoImg} alt=""/>
            <div className="nm">
              <span>交园驾校</span>
              <div>3.6分</div>
              <div className="price">
                <span>3000</span>
                <span>C1</span>
                <span>普通班</span>
              </div>
            </div>
            <div className="distance">
              <span>规模指数100</span>
              <span>35km</span>
            </div>
          </Link>
        </BorderItem>
        <BorderItem hasBorder={true}>
          <Link to="/apply/jxdetail">
            <img src={JiaxiaoImg} alt=""/>
            <div className="nm">
              <span>交园驾校</span>
              <div>3.6分</div>
              <div className="price">
                <span>3000</span>
                <span>C1</span>
                <span>普通班</span>
              </div>
            </div>
            <div className="distance">
              <span>规模指数100</span>
              <span>35km</span>
            </div>
          </Link>
        </BorderItem>
      </BotContainer>
    );
  }
  componentDidMount() {
    this.props.loadData()
  }
}


export default connect(mapState, mapDispatch)(BottomWrap)
