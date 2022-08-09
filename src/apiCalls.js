export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      // There's no .catch here.
}

export const saveUrls = (myUrl) => {
  const options = {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      long_url: myUrl.urlToShorten,
      title: myUrl.title
    }
  }
  return fetch('http://localhost:3001/api/v1/urls', options)
  .then(response => response.json())
  // There's no .catch here.
}