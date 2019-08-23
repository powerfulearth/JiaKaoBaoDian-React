import {TEST_PAGE_ORDER,TEST_PAGE_SIMULATEEXAM,TEST_PAGE_ALLSIMULATE} from './actionTypes';

const defaultState = {
  list:[],
  // error:0,
  // right:0
}

const reducer = (state=defaultState, action) => {
    switch(action.type) {
      // case 'right':
      //   console.log("对的aaaaaaaaa");
      //   return {
      //     right : state.right+1
      //   }
      // case 'error':
      //   console.log("错误aaaaaaaaaaa");
      //   return{
      //   error : state.error+1
      // }
      default :
      console.log("获取题目aaaaaaaaaa");
      return{
        list:action.list?action.list:state.list,
      }
    }
  
}

export {
  reducer
}