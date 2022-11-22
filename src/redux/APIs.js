const apiKey = '76a5197d8943e2e227cf03310c1ab4b7';

const getAllStocks = `https://financialmodelingprep.com/api/v3/stock-screener?limit=5000&apikey=${apiKey}`;

const getStockProfile = (stock) => `https://financialmodelingprep.com/api/v3/profile/${stock}?apikey=${apiKey}`;

export { getAllStocks, getStockProfile };
