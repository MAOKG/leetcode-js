const reverseBetween = require('./reverseBetween')
const arrayToLinkedList = require('../utils/arrayToLinkedList')
const linkedListToArray = require('../utils/linkedListToArray')

test('test case 1', () => {
    var input = arrayToLinkedList([1, 2, 3, 4, 5])
    var result = reverseBetween(input, 2, 4)

    expect(linkedListToArray(result)).toEqual([1, 4, 3, 2, 5])
})

test('test case 2', () => {
    var input = arrayToLinkedList([1, 2, 3, 4, 5])
    var result = reverseBetween(input, 3, 4)

    expect(linkedListToArray(result)).toEqual([1, 2, 4, 3, 5])
})
