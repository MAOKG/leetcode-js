const arrayToLinkedList = require('../utils/arrayToLinkedList')
const linkedListToArray = require('../utils/linkedListToArray')
const removeElements = require('./removeElements')

test('test case 1', () => {
    var l = arrayToLinkedList([1, 2, 6, 3, 4, 5, 6])
    var val = 6
    var result = removeElements(l, val)

    expect(linkedListToArray(result)).toEqual([1, 2, 3, 4, 5])
})

test('test case 2', () => {
    var l = arrayToLinkedList([1, 1])
    var val = 1
    var result = removeElements(l, val)

    expect(linkedListToArray(result)).toEqual([])
})
