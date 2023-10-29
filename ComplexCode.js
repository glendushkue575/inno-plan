/* 
File Name: ComplexCode.js
Description: This code demonstrates a complex and elaborate trading algorithm.
*/

// Generate random stock prices for given number of days
function generateStockPrices(numDays) {
  const stocks = [];
  for (let i = 0; i < numDays; i++) {
    stocks.push(Math.floor(Math.random() * 1000) + 1);
  }
  return stocks;
}

// Calculate the average stock price for given stocks
function calculateAveragePrice(stocks) {
  const totalPrice = stocks.reduce((sum, price) => sum + price, 0);
  return totalPrice / stocks.length;
}

// Analyze stock market trends using moving averages
function analyzeStockTrends(stocks) {
  const movingAverages = [];
  const numDays = stocks.length;
  
  const shortTermAvgDays = Math.floor(numDays / 10);
  const longTermAvgDays = Math.floor(numDays / 5);
  
  for (let i = shortTermAvgDays - 1; i < numDays; i++) {
    const shortTermAvg = calculateAveragePrice(stocks.slice(i - shortTermAvgDays + 1, i + 1));
    const longTermAvg = calculateAveragePrice(stocks.slice(i - longTermAvgDays + 1, i + 1));
    
    movingAverages.push({
      date: i + 1,
      shortTermAvg,
      longTermAvg,
      trend: shortTermAvg > longTermAvg ? 'positive' : 'negative'
    });
  }
  
  return movingAverages;
}

// Execute the trading algorithm
function runTradingAlgorithm() {
  const numDays = 365;
  const stocks = generateStockPrices(numDays);
  const stockTrends = analyzeStockTrends(stocks);
  
  console.log(`Stock Prices: ${stocks}`);
  
  console.log('Stock Trends:');
  console.log('Date\tShort Avg\tLong Avg\tTrend');
  
  stockTrends.forEach(trend => {
    console.log(`${trend.date}\t${trend.shortTermAvg}\t${trend.longTermAvg}\t\t${trend.trend}`);
  });
}

runTradingAlgorithm();