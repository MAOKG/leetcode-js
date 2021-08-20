const Solution = require('./solution')

test('test case 1', () => {
    const solution = new Solution([1])
    expect(solution.pickIndex()).toBe(0)
})

test('test case 2', () => {
    const solution = new Solution([1, 3])
    expect([0, 1].includes(solution.pickIndex())).toBe(true)
    expect([0, 1].includes(solution.pickIndex())).toBe(true)
    expect([0, 1].includes(solution.pickIndex())).toBe(true)
    expect([0, 1].includes(solution.pickIndex())).toBe(true)
})
