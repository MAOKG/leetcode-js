const isPalindrome = require('./isPalindrome')
const arrayToLinkedList = require('../utils/arrayToLinkedList')

test('test case 1', () => {
    var input = arrayToLinkedList([1, 2])
    expect(isPalindrome(input)).toBe(false)
})

test('test case 2', () => {
    var input = arrayToLinkedList([1, 2, 2, 1])
    expect(isPalindrome(input)).toBe(true)
})
