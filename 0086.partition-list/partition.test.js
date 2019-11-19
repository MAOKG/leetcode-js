const partition = require('./partition')
const arrayToLinkedList = require('../utils/arrayToLinkedList')
const linkedListToArray = require('../utils/linkedListToArray')

test('test case 1', () => {
    var input = arrayToLinkedList([1, 4, 3, 2, 5, 2])
    var result = partition(input, 3)

    expect(linkedListToArray(result)).toEqual([1, 2, 2, 4, 3, 5])
})
