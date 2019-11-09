const lengthOfLongestSubstring = require('./lengthLongestSubStr')

test('test case 1', () => {
    var input = 'abcabcbb'
    var result = lengthOfLongestSubstring(input)
    expect(result).toBe(3)
})

test('test case 2', () => {
    var input = 'bbbbb'
    var result = lengthOfLongestSubstring(input)
    expect(result).toBe(1)
})

test('test case 3', () => {
    var input = 'pwwkew'
    var result = lengthOfLongestSubstring(input)
    expect(result).toBe(3)
})
