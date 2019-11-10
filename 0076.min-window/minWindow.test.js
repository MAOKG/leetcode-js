const minWindow = require('./minWindow')

test('test case 1', () => {
    var s = 'ADOBECODEBANC'
    var t = 'ABC'

    var result = minWindow(s, t)
    expect(result).toBe('BANC')
})

test('test case 1', () => {
    var s = 'cabwefgewcwaefgcf'
    var t = 'cae'

    var result = minWindow(s, t)
    expect(result).toBe('cwae')
})
