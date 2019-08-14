
const defaultState = {
  list:[]
}

const reducer = (state=defaultState, action) => {
  return {
    list:action.list?action.list:state.list
  }
}

export {
  reducer
}