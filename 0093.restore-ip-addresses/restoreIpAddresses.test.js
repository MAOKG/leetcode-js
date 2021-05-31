const restoreIpAddresses = require('./restoreIpAddresses')

test('test case 1', () => {
    const input = '25525511135'
    const expected = ['255.255.11.135', '255.255.111.35']
    const result = restoreIpAddresses(input)
    expect(result).toEqual(expected)
})

test('test case 2', () => {
    const input = '0000'
    const expected = ['0.0.0.0']
    const result = restoreIpAddresses(input)
    expect(result).toEqual(expected)
})

test('test case 3', () => {
    const input = '1111'
    const expected = ['1.1.1.1']
    const result = restoreIpAddresses(input)
    expect(result).toEqual(expected)
})

test('test case 4', () => {
    const input = '010010'
    const expected = ['0.10.0.10', '0.100.1.0']
    const result = restoreIpAddresses(input)
    expect(result).toEqual(expected)
})

test('test case 5', () => {
    const input = '101023'
    const expected = [
        '1.0.10.23',
        '1.0.102.3',
        '10.1.0.23',
        '10.10.2.3',
        '101.0.2.3'
    ]
    const result = restoreIpAddresses(input)
    expect(result).toEqual(expected)
})
