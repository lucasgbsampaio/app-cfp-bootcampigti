const express = require('express');
const transactionRouter = express.Router();

const {
  getPeriod,
  postTransaction,
  putTransaction,
  deleteTransaction,
} = require('../services/transactionService');

transactionRouter
  .route('/')
  .get(getPeriod)
  .post(postTransaction)
  .put(putTransaction)
  .delete(deleteTransaction);

module.exports = transactionRouter;
