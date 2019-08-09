import {
  combineReducers
} from 'redux'

import { reducer as testPaper } from '../pages/exam/testQuestions/testPaper/reducer'
import { reducer as testHeader } from '../pages/exam/testQuestions/testHeader/reducer'

const reducer = combineReducers({
  testPaper,
  testHeader
})

export default reducer