const swapPairs = require('./swapPairs')
const arrayToLinkedList = require('../utils/arrayToLinkedList')
const linkedListToArray = require('../utils/linkedListToArray')

test('test case 1', () => {
    var input = arrayToLinkedList([1, 2, 3, 4])
    var result = swapPairs(input)

    expect(linkedListToArray(result)).toEqual([2, 1, 4, 3])
})
