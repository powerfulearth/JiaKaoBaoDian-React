const defaultState = {
  isTab: 1
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'headerTab': 
      return {
        isTab: action.payload
      }
    default:
      return state
  }
}


export {
  reducer
}