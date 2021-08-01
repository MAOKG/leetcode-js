const coinChange = require('./coinChange')

test('test case 1', () => {
    const coins = [1, 2, 5]
    const amount = 11
    const output = 3
    const result = coinChange(coins, amount)
    expect(result).toBe(output)
})

test('test case 2', () => {
    const coins = [2]
    const amount = 3
    const output = -1
    const result = coinChange(coins, amount)
    expect(result).toBe(output)
})

test('test case 3', () => {
    const coins = [1]
    const amount = 0
    const output = 0
    const result = coinChange(coins, amount)
    expect(result).toBe(output)
})

test('test case 4', () => {
    const coins = [1]
    const amount = 1
    const output = 1
    const result = coinChange(coins, amount)
    expect(result).toBe(output)
})

test('test case 5', () => {
    const coins = [1]
    const amount = 2
    const output = 2
    const result = coinChange(coins, amount)
    expect(result).toBe(output)
})
