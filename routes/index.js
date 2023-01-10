const express = require('express')
const productsRouter = require('./productsRouter')
const CategoriesRouter = require('./categoriesRouter')
const userRouter = require("./userRouter")

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/categories', CategoriesRouter)
  router.use('/users', userRouter)
}

module.exports = routerApi
