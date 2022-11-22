const apiKey = 'da721dd7087fee6137077bd04b61b8d5';

const getAllStocks = `https://financialmodelingprep.com/api/v3/stock-screener?limit=5000&apikey=${apiKey}`;

const getStockProfile = (stock) => `https://financialmodelingprep.com/api/v3/profile/${stock}?apikey=${apiKey}`;

export { getAllStocks, getStockProfile };
