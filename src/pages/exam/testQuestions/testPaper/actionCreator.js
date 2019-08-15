import { TEST_PAGE_ORDER,TEST_PAGE_SIMULATEEXAM,TEST_PAGE_ALLSIMULATE, TRUE, FALSE } from './actionTypes'

const syncLoadData = (type,list) => ({
  type,
  list
})

const asyncLoadData = (type) => {
  return (dispatch) => {
    let url=""
    switch(type){
      case TEST_PAGE_ORDER: url="https://api.myjson.com/bins/e2smr";break;
      case TEST_PAGE_SIMULATEEXAM: url=" https://api.myjson.com/bins/b7wxf";break;
      case TEST_PAGE_ALLSIMULATE: url="https://api.myjson.com/bins/17fgr7" ;break;
      default : url="https://api.myjson.com/bins/zpkz3";
    }
    console.log("我发送了请求,类型是：",type)
    fetch(url)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        dispatch(syncLoadData(type,result.data))
      })
  }
}

const trueSelect = (select, orderExam) => ({
  type: TRUE,
  select,
  orderExam
})
const falseSelect = (select, orderExam) => ({
  type: FALSE,
  select,
  orderExam
})

export {
  asyncLoadData,
  trueSelect,
  falseSelect
}