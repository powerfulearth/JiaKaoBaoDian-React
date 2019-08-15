const http = (url, options) => {
  return fetch(url, options)
    .then(response => response.json())
    .then(result => {
      return result.data
    })
}

export default http