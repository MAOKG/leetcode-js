const maxProfit = require('./maxProfit')

test('test case 1', () => {
    const prices = [1, 2, 3, 0, 2]
    const output = 3
    const result = maxProfit(prices)
    expect(result).toBe(output)
})

test('test case 2', () => {
    const prices = [1]
    const output = 0
    const result = maxProfit(prices)
    expect(result).toBe(output)
})
