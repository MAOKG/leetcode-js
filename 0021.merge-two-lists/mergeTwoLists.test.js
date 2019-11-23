const mergeTwoLists = require('./mergeTwoLists')
const arrayToLinkedList = require('../utils/arrayToLinkedList')
const linkedListToArray = require('../utils/linkedListToArray')

test('test case 1', () => {
    var input1 = arrayToLinkedList([1, 2, 4])
    var input2 = arrayToLinkedList([1, 3, 4])
    var result = mergeTwoLists(input1, input2)

    expect(linkedListToArray(result)).toEqual([1, 1, 2, 3, 4, 4])
})
