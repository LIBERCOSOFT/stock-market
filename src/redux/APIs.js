const apiKey = '6c6495d258311129e36a5eb6f5f9f884';

const getAllStocks = `https://financialmodelingprep.com/api/v3/stock-screener?limit=1000&apikey=${apiKey}`;

const getStockProfile = (stock) => `https://financialmodelingprep.com/api/v3/profile/${stock}?apikey=${apiKey}`;

export { getAllStocks, getStockProfile };
