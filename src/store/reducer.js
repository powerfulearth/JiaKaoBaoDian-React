import {
  combineReducers
} from 'redux'

import { reducer as testPaper } from '../pages/testQuestions/testPaper/reducer'

const reducer = combineReducers({
  testPaper
})

export default reducer