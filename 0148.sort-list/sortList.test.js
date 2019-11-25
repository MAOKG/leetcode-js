const sortList = require('./sortList')
const arrayToLinkedList = require('../utils/arrayToLinkedList')
const linkedListToArray = require('../utils/linkedListToArray')

test('test case 1', () => {
    var input = arrayToLinkedList([4, 2, 1, 3])
    var result = sortList(input)

    expect(linkedListToArray(result)).toEqual([1, 2, 3, 4])
})

test('test case 2', () => {
    var input = arrayToLinkedList([-1, 5, 3, 4, 0])
    var result = sortList(input)

    expect(linkedListToArray(result)).toEqual([-1, 0, 3, 4, 5])
})
