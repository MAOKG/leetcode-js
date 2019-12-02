const reorderList = require('./reorderList')
const arrayToLinkedList = require('../utils/arrayToLinkedList')
const linkedListToArray = require('../utils/linkedListToArray')

test('test case 1', () => {
    let head = arrayToLinkedList([1, 2, 3, 4])
    reorderList(head)

    expect(linkedListToArray(head)).toEqual([1, 4, 2, 3])
})

test('test case 2', () => {
    let head = arrayToLinkedList([1, 2, 3, 4, 5])
    reorderList(head)

    expect(linkedListToArray(head)).toEqual([1, 5, 2, 4, 3])
})
