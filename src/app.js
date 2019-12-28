const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()

// Define paths for Epress config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Michael Koblinski'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Michael Koblinski'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    message: 'This is the help page',
    title: 'Help',
    name: 'Michael Koblinski'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Sunny',
    location: 'LA'
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404 Page',
    message: 'Help article not found',
    name: 'Michael Koblinski'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404 Page',
    message: 'Page not found',
    name: 'Michael Koblinski'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})