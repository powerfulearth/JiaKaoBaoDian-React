
const defaultState = {
  list:[],
  didHistory:{}
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {

    case 'false':
      return {
        didHistory:{
          action
        }
      }
    case 'true':return{

    }
    default: 
      return {list:action.list?action.list:state.list}
  }
}

export {
  reducer
}