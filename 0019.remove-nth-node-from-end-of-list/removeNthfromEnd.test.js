const removeNthFromEnd = require('./removeNthFromEnd')
const arrayToLinkedList = require('../utils/arrayToLinkedList')
const linkedListToArray = require('../utils/linkedListToArray')

test('test case 1', () => {
    var head = arrayToLinkedList([1, 2, 3, 4, 5])
    var n = 2
    var result = removeNthFromEnd(head, n)

    expect(linkedListToArray(result)).toEqual([1, 2, 3, 5])
})
