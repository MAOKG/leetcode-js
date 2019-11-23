const addTwoNumbers = require('./addTwoNumbers')
const arrayToLinkedList = require('../utils/arrayToLinkedList')
const linkedListToArray = require('../utils/linkedListToArray')

test('test case 1', () => {
    var l1 = arrayToLinkedList([7, 2, 4, 3])
    var l2 = arrayToLinkedList([5, 6, 4])
    var result = addTwoNumbers(l1, l2)

    expect(linkedListToArray(result)).toEqual([7, 8, 0, 7])
})

test('test case 2', () => {
    var l1 = arrayToLinkedList([2, 4, 3])
    var l2 = arrayToLinkedList([5, 6, 4])
    var result = addTwoNumbers(l1, l2)

    expect(linkedListToArray(result)).toEqual([8, 0, 7])
})
