const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');

const getPeriod = async (req, res) => {
  try {
  } catch {}
};

const postTransaction = async (req, res) => {
  try {
  } catch {}
};

const putTransaction = async (req, res) => {
  try {
  } catch {}
};

const deleteTransaction = async (req, res) => {
  try {
  } catch {}
};

module.exports = {
  getPeriod,
  postTransaction,
  putTransaction,
  deleteTransaction,
};
