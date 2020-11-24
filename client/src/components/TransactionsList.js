import React from 'react';

import css from './styles/transaction.module.css';
import { formatMoney } from '../helpers/formatNumbers';

export default function TransactionsList({ transactions }) {
  return (
    <div className="center" style={{ padding: '5px' }}>
      {transactions.map(({ _id, description, category, value, day, type }) => {
        return (
          <div
            style={type === '-' && { backgroundColor: 'rgb(192,57,43)' }}
            className={css.transaction}
            key={_id}
          >
            <span
              style={{
                marginRight: '20px',
                fontFamily: 'Consolas, monospace',
                fontWeight: 'bold',
                fontSize: '1.5rem',
              }}
            >
              {day}
            </span>
            <div className={css.text}>
              <div className={css.text2}>
                <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                  {category}
                </span>
                <span style={{ fontSize: '1.2rem' }}>{description}</span>
              </div>
              <span
                style={{
                  textAlign: 'start',
                  fontSize: '1.8rem',
                  fontFamily: 'Consolas, monospace',
                }}
              >
                {formatMoney(value)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
