const rotateRight = require('./rotateRight')
const arrayToLinkedList = require('../utils/arrayToLinkedList')
const linkedListToArray = require('../utils/linkedListToArray')

test('test case 1', () => {
    var head = arrayToLinkedList([1, 2, 3, 4, 5])
    var k = 2
    var result = rotateRight(head, k)

    expect(linkedListToArray(result)).toEqual([4, 5, 1, 2, 3])
})

test('test case 2', () => {
    var head = arrayToLinkedList([0, 1, 2])
    var k = 4
    var result = rotateRight(head, k)

    expect(linkedListToArray(result)).toEqual([2, 0, 1])
})
