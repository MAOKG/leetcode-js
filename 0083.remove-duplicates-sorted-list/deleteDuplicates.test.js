const deleteDuplicates = require('./deleteDuplicates')
const arrayToLinkedList = require('../utils/arrayToLinkedList')
const linkedListToArray = require('../utils/linkedListToArray')

test('test case 1', () => {
    var input = arrayToLinkedList([1, 1, 2])
    var result = deleteDuplicates(input)

    expect(linkedListToArray(result)).toEqual([1, 2])
})

test('test case 2', () => {
    var input = arrayToLinkedList([1, 1, 2, 3, 3])
    var result = deleteDuplicates(input)

    expect(linkedListToArray(result)).toEqual([1, 2, 3])
})
