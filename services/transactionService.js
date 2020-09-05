// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');

const getPeriod = async (req, res) => {
  try {
    const { period } = req.query;

    if (!period) {
      return res.status(404).send({
        error: 'Informe o "period" no formato yyyy-mm',
      });
    }

    const transactions = await TransactionModel.find({ yearMonth: period });

    return res.status(200).send(transactions);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const postTransaction = async (req, res) => {
  try {
    const transaction = req.body;

    if (!transaction) {
      return res.status(404).send({
        error: 'Informe todos os campos de uma transação',
      });
    }

    const newTransaction = new TransactionModel(transaction);
    await newTransaction.save();

    return res.status(200).send(newTransaction);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const putTransaction = async (req, res) => {
  try {
    const { _id } = req.query;
    const transaction = req.body;

    if (!_id || !transaction) {
      return res.status(404).send({
        error: 'Informe o _id via query e a transação pelo body',
      });
    }

    const updateTransaction = await TransactionModel.findByIdAndUpdate(
      _id,
      transaction,
      { new: true }
    );

    return res.status(200).send(updateTransaction);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const { _id } = req.query;

    if (!_id) {
      return res.status(404).send({
        error: 'Informe o _id',
      });
    }

    await TransactionModel.deleteOne({ _id });

    return res.status(200).json({ message: 'Transação deletada com sucesso' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPeriod,
  postTransaction,
  putTransaction,
  deleteTransaction,
};
