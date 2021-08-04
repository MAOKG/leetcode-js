const findMaxForm = require('./findMaxForm')

test('test case 1', () => {
    const strs = ['10', '0001', '111001', '1', '0']
    const m = 5
    const n = 3
    const output = 4
    const result = findMaxForm(strs, m, n)

    expect(result).toBe(output)
})

test('test case 2', () => {
    const strs = ['10', '0', '1']
    const m = 1
    const n = 1
    const output = 2
    const result = findMaxForm(strs, m, n)

    expect(result).toBe(output)
})
