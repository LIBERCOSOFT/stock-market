const apiKey = '5383430e402136344d72fbb4e99c90bc';

const getAllStocks = `https://financialmodelingprep.com/api/v3/stock-screener?limit=1000&apikey=${apiKey}`;
const getStockProfile = (stock) => `https://financialmodelingprep.com/api/v3/profile/${stock}?apikey=${apiKey}`;

export { getAllStocks, getStockProfile };
