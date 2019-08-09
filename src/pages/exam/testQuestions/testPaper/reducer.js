import { TEST_PAGE } from './actionTypes'

const defaultState = {
  list:[]
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case TEST_PAGE: 
      return {
        list: action.list
      }
    default: 
      return state
  }
}

export {
  reducer
}