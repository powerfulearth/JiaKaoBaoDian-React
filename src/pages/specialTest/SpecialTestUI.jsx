import React from 'react'

import { StyledSpecialTestContainer } from './StyledSpecialTest'
import BackHeader from '../compoents/back_header/BackHeader'

export default (props) => (
  <StyledSpecialTestContainer>
    <BackHeader></BackHeader>
    <div className="container">
      <div className="testBox">
        <div className="notDone public">
          <div className="item">
            <span className="pic"></span>
            <p className="text">未作题练习</p>
          </div>
        </div>
        <div className="chapter public">
          <div className="item">
            <span className="pic"></span>
            <p className="text">按章节练习</p>
          </div>
        </div>
        <div className="error public">
          <div className="item">
            <span className="pic"></span>
            <p className="text">按章节练习</p>
          </div>
          <div className="item">
            <span className="pic"></span>
            <p className="text">按章节练习</p>
          </div>
        </div>
        <div className="type public">
          {props.type.map(value => (
            <div className="item" key={value.specialtypeid}>
              <span className="pic"></span>
              <p className="text">{value.specialtypename}</p>
              <p className="num">{value.total}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </StyledSpecialTestContainer>
)