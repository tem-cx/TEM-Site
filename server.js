  require('dotenv').config()

  const express = require('express')
  const app = express()
  const session = require('cookie-session')
  const routes = require('./routes')
  const path = require('path')
  
  app.set('view engine', 'ejs')
  app.set('views', path.join(__dirname, 'views'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))
  
  app.use(routes)
  const port = process.env.PORT || 5000
  app.listen(port, async () => {
    console.log('Server running at port', port)
  })
  