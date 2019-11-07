const isPalindrome = require('./validPalindrome')

test('test case 1', () => {
    var input = 'A man, a plan, a canal: Panama'
    var result = isPalindrome(input)

    expect(result).toBe(true)
})

test('test case 2', () => {
    var input = 'race a car'
    var result = isPalindrome(input)

    expect(result).toBe(false)
})
