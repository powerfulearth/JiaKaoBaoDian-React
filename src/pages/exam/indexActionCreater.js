import {CHANGEPAGE} from './indexActionTypes';

const change = (info,changeTo) => {
  console.log("派发变更页面",info,changeTo);
  return (dispatch) => {
    dispatch({
      type:CHANGEPAGE,
      changeTo
    })
  }
}
export{
  change
}