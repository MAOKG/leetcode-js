/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length
    if (n < 2) {
        return 0
    }
    if (n === 2) {
        return Math.max(0, prices[1] - prices[0])
    }
    const buy = new Array(n).fill(0)
    const sell = new Array(n).fill(0)
    buy[0] = -prices[0]
    buy[1] = Math.max(-prices[0], -prices[1])
    sell[0] = 0
    sell[1] = Math.max(sell[0], prices[1] + buy[0])
    for (let i = 2; i < n; i++) {
        buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i])
        sell[i] = Math.max(sell[i - 1], prices[i] + buy[i - 1])
    }
    return sell[n - 1]
}

module.exports = maxProfit
// runtime 95%
// memory 60%
