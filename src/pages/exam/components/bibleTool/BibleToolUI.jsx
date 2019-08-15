import React, { Component } from 'react';

import { BannerPic, StyledBibleToolContainer } from "./StyledBibleTool";

class bibleToolUI extends Component {
  render() {
    return (
      <>
        <BannerPic>
          <div className="bannerPic">
            <img src="" alt=""/>
          </div>
        </BannerPic>
        <StyledBibleToolContainer>
          <h3 className="title">宝典工具</h3>
          <div className="tollBox">
            <div className="toll_item">
              <p className="toll_item_title">我的收藏</p>
              <img src="" alt="" className="toll_item_pic" />
            </div>
            <div className="toll_item">
              <p className="toll_item_title">我的收藏</p>
              <img src="" alt="" className="toll_item_pic" />
            </div>
            <div className="toll_item">
              <p className="toll_item_title">我的收藏</p>
              <img src="" alt="" className="toll_item_pic" />
            </div>
            <div className="toll_item">
              <p className="toll_item_title">我的收藏</p>
              <img src="" alt="" className="toll_item_pic" />
            </div>
          </div>
        </StyledBibleToolContainer>
      </>
    );
  }
}

export default bibleToolUI;