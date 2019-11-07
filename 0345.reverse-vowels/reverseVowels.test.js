const reverseVowels = require('./reverseVowels')
test('test case 1', () => {
    var input = 'hello'
    var result = reverseVowels(input)

    expect(result).toBe('holle')
})

test('test case 2', () => {
    var input = 'leetcode'
    var result = reverseVowels(input)

    expect(result).toBe('leotcede')
})
