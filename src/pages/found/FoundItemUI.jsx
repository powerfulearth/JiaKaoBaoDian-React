import React, { Component } from 'react';

function FoundItemUI (props)  {
  const data = props.data.data.result.data
  // console.log(data);
  return(
    data.map((value) => {
      return(
        <a href={value.url} className="foundBox" key={value.uniquekey}>
          <div className="abstract">
            <div className="tit">{value.title}</div>
            <div className="detail">
              <div className="author">{value.author_name}</div>
              <div className="date">{value.date}</div>
            </div>
          </div>
          <div className="pic"><img src={value.thumbnail_pic_s}/></div>
        </a>
      )
    })
  )
}


export default FoundItemUI;