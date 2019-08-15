import {CHANGEPAGE} from './indexActionTypes';

const defaultState ={
  currentPage:0
}

const indexReducer = (state=defaultState,action) => {
  switch(action.type){
    case CHANGEPAGE: return {currentPage:action.changeTo}
    default: return state;
  }
}

export { indexReducer }