const { Router } = require('express')
const controller = require('../../controllers/items/item')

const router = Router()



router
  .route('/*')
  .get(controller.getItems)
  .post(controller.postItems)

module.exports = router
