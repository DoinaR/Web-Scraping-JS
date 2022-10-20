const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:8000/results')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((article) => {
      const title =
        `<div><h3><a href="` +
        article.url +
        `" target="_blank" rel="tag">` +
        article.title +
        `</a></h3></div>`
      feedDisplay.insertAdjacentHTML('beforeend', title)
    })
  })
