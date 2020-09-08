const MONTH = [
  ['Jan', '01'],
  ['Fev', '02'],
  ['Mar', '03'],
  ['Abr', '04'],
  ['Mai', '05'],
  ['Jun', '06'],
  ['Jul', '07'],
  ['Ago', '08'],
  ['Set', '09'],
  ['Out', '10'],
  ['Nov', '11'],
  ['Dez', '12'],
];

const YEAR = [2019, 2020, 2021];

const allMonthYear = [];

YEAR.map((number) => {
  return MONTH.map((name) => {
    return allMonthYear.push([`${name[0]}/${number}`, `${number}-${name[1]}`]);
  });
});

export { allMonthYear };
