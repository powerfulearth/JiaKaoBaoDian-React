import { TEST_PAGE, TRUE, FALSE } from './actionTypes'

const defaultState = {
  list:[],
  select: {
    chapter: '',
    id: '',
    index: '',
    answer: '',
    isRight: false
  },
  orderExam: []
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case TEST_PAGE: 
      return {
        list: action.list
      }
    case TRUE: 
      return {
        select: action.select,
        orderExam: action.orderExam
      }
    case FALSE: 
      return {
        select: action.select,
        orderExam: action.orderExam
      }
    default: 
      return {list:action.list?action.list:state.list}
  }
}

export {
  reducer
}