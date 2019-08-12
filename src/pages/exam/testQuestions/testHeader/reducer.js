const defaultState = {
  _isTab: '1'
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'headerTab': 
      return {
        _isTab: action.payload
      }
    default:
      return state
  }
}


export {
  reducer
}