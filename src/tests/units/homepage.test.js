import axios from 'axios';
import { apiKey } from '../../redux/APIs';

test('returns all all stocks from API call', async () => {
  const allStocks = await axios.get(`https://financialmodelingprep.com/api/v3/stock-screener?limit=5&apikey=${apiKey}`);
  expect(Object.keys(allStocks).length).toBeGreaterThan(0);
  expect(allStocks).not.toBeNull();
  expect(allStocks).toBeInstanceOf(Object);
});
