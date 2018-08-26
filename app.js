const express = require('express')
const exphbs  = require('express-handlebars');

const app = express()

app.set('views', './views')
app.use(express.static('public'))

app.engine('hbs', exphbs({defaultLayout: 'main', extname: ".hbs" }));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/faq', (req, res) => {
  res.render('faq')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
