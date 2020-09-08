import axios from 'axios';

//Criando uma instancia
const url = axios.create({
  baseURL: '/api/transaction',
});

async function getPeriod(period) {
  const res = await url.get(`?period=${period}`);
  return res.data;
}

export { getPeriod };
