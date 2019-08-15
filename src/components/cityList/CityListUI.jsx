import React, { Component } from 'react';

export default function (props) {
  return (
    <div>
      <div className="cityList">城市列表</div>
      {
        props.cityList.cityList ?
          Object.keys(props.cityList.cityList).map((value) => {
            return (
              <ul className="citySort" key={value}>
                <div className="abcd">{value}</div>
                {
                  props.cityList.cityList[value].map((city) => {
                    return (
                      <li className="cityItem" key={city}>{city}</li>
                    )
                  })
                }
              </ul>
            )
          })
          : console.log("数据还没来")
      }
    </div>
  )
}