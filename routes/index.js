const { Router } = require('express')


const home = require('./home/home')
const item = require('./items/item')

const {checkHttps} = require('../middlewares/middleware')

const router = Router()

router.use('/',checkHttps, home)
router.use('/items/',checkHttps, item)


router.get('*', (req, res) => {
    res.status(404).send('errors/404.ejs')
  })
  
module.exports = router
  