/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    coins.sort((a, b) => b - a)
    const memo = new Array(coins.length)
        .fill(0)
        .map(ele => new Array(amount + 1).fill(null))
    return getNum(coins, amount, 0, memo)
}

var getNum = function(coins, amount, index, memo) {
    if (amount === 0) {
        return 0
    }
    if (index >= coins.length || amount < 0) {
        return -1
    }
    if (memo[index][amount] !== null) {
        return memo[index][amount]
    }
    let res = -1
    let res1 = getNum(coins, amount, index + 1, memo)
    let res2 = getNum(coins, amount - coins[index], index, memo)
    if (res2 > -1) {
        res2++
    }
    if (res1 > -1 && res2 > -1) {
        res = Math.min(res1, res2)
    } else if (res1 < 0) {
        res = res2
    } else {
        res = res1
    }

    memo[index][amount] = res
    return res
}

module.exports = coinChange
// runtime 35%
// memory 41%
