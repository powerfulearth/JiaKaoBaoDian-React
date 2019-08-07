const syncLoadData = list => ({
  type: "TEST_PAGE",
  list
})

const asyncLoadData = () => {
  return (dispatch) => {
    fetch('https://api.myjson.com/bins/126abx')
      .then(response => response.json())
      .then(result => {
        dispatch(syncLoadData(result.data))
      })
  }
}

export {
  syncLoadData,
  asyncLoadData
}