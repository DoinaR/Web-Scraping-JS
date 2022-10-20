const PORT = 8000
const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')
const app = express()
const cors = require('cors')
app.use(cors())

const url = 'https://www.theguardian.com/international'

app.get('/', (req, res) => {
  res.json('This is a webscraper')
})

app.get('/results', (req, res) => {
  axios(url)
    .then((response) => {
      const html = response.data
      const $ = cheerio.load(html)
      const articles = []

      $('.fc-item__title').each((i, el) => {
        const title = $(el).text()
        const url = $(el).find('a').attr('href')
        articles.push({
          title,
          url,
        })
      })
      res.json(articles)
    })
    .catch((err) => console.log(err))
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
