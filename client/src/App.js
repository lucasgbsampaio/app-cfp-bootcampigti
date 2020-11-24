import React, { useState, useEffect } from 'react';
import PeriodList from './components/PeriodList';
import FilterTransaction from './components/FilterTransaction';
import TransactionsList from './components/TransactionsList';

import { allMonthYear } from './helpers/getMonthYear';
import * as api from './api/apiService';

import M from 'materialize-css';
import ShowDetails from './components/ShowDetails';

export default function App() {
  const [period, setPeriod] = useState('Set/2020');
  const [transactions, setTransactions] = useState([]);
  const [textFilter, setTextFilter] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    const apiPeriod = allMonthYear.find((periodNumber) => {
      return periodNumber[0] === period;
    });
    const getTransactions = async () => {
      const newTransaction = await api.getPeriod(apiPeriod[1]);
      setTransactions(newTransaction);
    };
    getTransactions();
  }, [period]);

  useEffect(() => {
    const filteredTransactions = transactions.filter((item) =>
      item.description.toLocaleLowerCase().includes(textFilter)
    );

    const transactionsToDisplay =
      textFilter.length > 0 ? filteredTransactions : transactions;
    setFilteredTransactions(
      transactionsToDisplay.sort((a, b) => a.day - b.day)
    );
  }, [textFilter, transactions]);

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  const handleTextChange = (newText) => {
    setTextFilter(newText);
  };

  return (
    <>
      <div className="container">
        <div className="center">
          <h4>Bootcamp Full Stack - Desafio Final</h4>
          <h4>Controle de Finanças</h4>
          <PeriodList period={period} onChangePeriod={handlePeriodChange} />
          <ShowDetails transactions={filteredTransactions} />
          <FilterTransaction
            textFilter={textFilter}
            onChangeText={handleTextChange}
          />
          <TransactionsList
            transactions={filteredTransactions}
            textFilter={textFilter}
          />
        </div>
      </div>
    </>
  );
}
