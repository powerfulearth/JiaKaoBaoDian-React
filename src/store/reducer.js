import {
  combineReducers
} from 'redux'

import { reducer as testPaper } from '../pages/exam/testQuestions/testPaper/reducer'
import { reducer as testHeader } from '../pages/exam/testQuestions/testHeader/reducer'
import {indexReducer} from '../pages/exam/indexReducer';

import { applyReducer } from '../pages/apply/bottomWrap/';


const reducer = combineReducers({
  testPaper,
  testHeader,
  indexReducer,
  applyReducer
})

export default reducer