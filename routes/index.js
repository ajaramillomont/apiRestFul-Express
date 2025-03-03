const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const ordersRouter = require('./orders.router');
const customersRouter = require('./customers.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/orders', ordersRouter);
  router.use('/customers', customersRouter);
  router.use('/usersRouter', usersRouter);
}

module.exports = routerApi;
