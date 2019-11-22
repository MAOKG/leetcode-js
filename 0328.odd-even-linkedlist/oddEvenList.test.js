const arrayToLinkedList = require('../utils/arrayToLinkedList')
const linkedListToArray = require('../utils/linkedListToArray')
const oddEvenList = require('./oddEvenList')

test('test case 1', () => {
    var input = arrayToLinkedList([1, 2, 3, 4, 5])
    var result = oddEvenList(input)

    expect(linkedListToArray(result)).toEqual([1, 3, 5, 2, 4])
})

test('test case 2', () => {
    var input = arrayToLinkedList([2, 1, 3, 5, 6, 4, 7])
    var result = oddEvenList(input)

    expect(linkedListToArray(result)).toEqual([2, 3, 6, 7, 1, 5, 4])
})
