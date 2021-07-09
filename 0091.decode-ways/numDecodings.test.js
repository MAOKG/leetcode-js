const numDecodings = require('./numDecodings')

test('test case 1', () => {
    const s = '12'
    const output = 2
    const result = numDecodings(s)
    expect(result).toBe(output)
})

test('test case 2', () => {
    const s = '226'
    const output = 3
    const result = numDecodings(s)
    expect(result).toBe(output)
})

test('test case 3', () => {
    const s = '0'
    const output = 0
    const result = numDecodings(s)
    expect(result).toBe(output)
})

test('test case 4', () => {
    const s = '06'
    const output = 0
    const result = numDecodings(s)
    expect(result).toBe(output)
})
