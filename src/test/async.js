function fetchData(callback) {
  fetch("/api/data")
    .then((response) => response.json())
    .then((data) => callback(null, data))
    .catch((err) => callback(err, null))
}

export default fetchData

