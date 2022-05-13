const { Router } = require('express')


const home = require('./home/home')

const router = Router()

router.use('/', home)


router.get('*', (req, res) => {
    res.status(404).send('errors/404.ejs')
  })
  
module.exports = router
  