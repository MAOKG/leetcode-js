/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    coins.sort((a, b) => a - b)
    const memo = new Array(amount + 1).fill(-1)
    memo[0] = 0
    for (let a = 1; a <= amount; a++) {
        if (a >= coins[0] && memo[a - coins[0]] > -1) {
            memo[a] = 1 + memo[a - coins[0]]
        }
    }

    for (let i = 1; i < coins.length; i++) {
        for (let a = 1; a <= amount; a++) {
            if (a >= coins[i]) {
                let val1 = memo[a - coins[i]]
                if (val1 > -1) {
                    val1++
                }
                let val2 = memo[a]
                if (val1 > -1 && val2 > -1) {
                    memo[a] = Math.min(val1, val2)
                } else if (val1 > -1) {
                    memo[a] = val1
                }
            }
        }
    }

    return memo[amount]
}

module.exports = coinChange
// runtime 91%
// memory 75%
