import React from 'react';

import css from './details.module.css';
import { formatMoney } from '../helpers/formatNumbers';

export default function ShowDetails({ transactions }) {
  const lengthTransactions = transactions.length;

  const revenue = transactions
    .filter((transaction) => transaction.type === '+')
    .reduce((acc, cur) => acc + cur.value, 0);

  const expense = transactions
    .filter((transaction) => transaction.type === '-')
    .reduce((acc, cur) => acc + cur.value, 0);

  const balance = revenue - expense;

  return (
    <div className={css.details}>
      <span>
        <strong>Lançamentos: </strong>
        <span style={{ fontWeight: 'bold' }}>{lengthTransactions}</span>
      </span>
      <span>
        <strong>Receitas: </strong>
        <span style={{ color: 'rgb(22,160,133)', fontWeight: 'bold' }}>
          {formatMoney(revenue)}
        </span>
      </span>
      <span>
        <strong>Despesas: </strong>
        <span style={{ color: 'rgb(192,57,43)', fontWeight: 'bold' }}>
          {formatMoney(expense)}
        </span>
      </span>
      <span>
        <strong>Saldo: </strong>
        <span style={{ fontWeight: 'bold' }}>{formatMoney(balance)}</span>
      </span>
    </div>
  );
}
