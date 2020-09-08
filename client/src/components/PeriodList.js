import React from 'react';

import { allMonthYear } from '../helpers/getMonthYear';
import css from './period.module.css';

export default function PeriodList({ period, onChangePeriod }) {
  const handlePeriod = (event) => {
    const newPeriod = event.target.value;
    onChangePeriod(newPeriod);
  };

  return (
    <div className={css.period}>
      <select
        className="browser-default"
        style={{
          width: '150px',
          border: '1px solid lightgrey',
          borderRadius: '4px',
        }}
        value={period}
        onChange={handlePeriod}
      >
        {allMonthYear.map((monthYear) => {
          return <option key={monthYear[1]}>{monthYear[0]}</option>;
        })}
      </select>
    </div>
  );
}
