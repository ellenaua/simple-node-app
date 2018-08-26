const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/faq', (req, res) => {
  res.send('Frequently asked questions')
})

app.get('/contact', (req, res) => {
  res.send('Contact us: support@test.com')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
