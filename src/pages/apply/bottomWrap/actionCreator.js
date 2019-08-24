import { LOADDATA} from './actionTypes';

import http from 'util/http';

export const loadDataSync = (data) => {
  return {
    type: LOADDATA,
    data
  }
}

export const loadDataAsync = () => {
  return async (dispatch) => {
    let result = await http('https://api.myjson.com/bins/phjwf')
    dispatch(loadDataSync(result))
  }
}