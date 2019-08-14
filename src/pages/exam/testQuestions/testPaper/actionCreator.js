import { TEST_PAGE, TRUE, FALSE } from './actionTypes'

const syncLoadData = list => ({
  type: TEST_PAGE,
  list
})

const trueSelect = (select, orderExam) => ({
  type: TRUE,
  select,
  orderExam
})
const falseSelect = (select, orderExam) => ({
  type: FALSE,
  select,
  orderExam
})

const asyncLoadData = () => {
  return (dispatch) => {
    fetch('https://api.myjson.com/bins/10lkzb')
      .then(response => response.json())
      .then(result => {
        dispatch(syncLoadData(result.data))
      })
  }
}

export {
  syncLoadData,
  asyncLoadData,
  trueSelect,
  falseSelect
}