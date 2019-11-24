const reverseKGroup = require('./reverseKGroup')
const arrayToLinkedList = require('../utils/arrayToLinkedList')
const linkedListToArray = require('../utils/linkedListToArray')

test('test case 1', () => {
    var l = arrayToLinkedList([1, 2, 3, 4, 5])
    var k = 2
    var result = reverseKGroup(l, k)

    expect(linkedListToArray(result)).toEqual([2, 1, 4, 3, 5])
})

test('test case 1', () => {
    var l = arrayToLinkedList([1, 2, 3, 4, 5])
    var k = 3
    var result = reverseKGroup(l, k)

    expect(linkedListToArray(result)).toEqual([3, 2, 1, 4, 5])
})
