const reverseList = require('./reverseList')
const arrayToLinkedList = require('../utils/arrayToLinkedList')
const linkedListToArray = require('../utils/linkedListToArray')

test('test case 1', () => {
    var input = arrayToLinkedList([1, 2, 3, 4, 5])
    var result = reverseList(input)
    expect(linkedListToArray(result)).toEqual([5, 4, 3, 2, 1])
})
