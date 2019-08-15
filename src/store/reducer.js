import {
  combineReducers
} from 'redux'

import { reducer as testPaper } from '../pages/exam/testQuestions/testPaper/reducer'
import { reducer as testHeader } from '../pages/exam/testQuestions/testHeader/reducer'
import {indexReducer} from '../pages/exam/indexReducer';


const reducer = combineReducers({
  testPaper,
  testHeader,
  indexReducer
})

export default reducer