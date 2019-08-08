import {
  combineReducers
} from 'redux'

import { reducer as testPaper } from '../pages/testQuestions/testPaper/reducer'
import { reducer as testHeader } from '../pages/testQuestions/testHeader/reducer'

const reducer = combineReducers({
  testPaper,
  testHeader
})

export default reducer