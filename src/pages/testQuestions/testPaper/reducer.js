import { TESTPAGE } from './actionTypes'

const defaultState = {
  list:[]
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case TESTPAGE: 
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