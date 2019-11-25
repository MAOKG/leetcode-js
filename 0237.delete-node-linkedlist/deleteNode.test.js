const deleteNode = require('./deleteNode')
const arrayToLinkedList = require('../utils/arrayToLinkedList')
const linkedListToArray = require('../utils/linkedListToArray')

test('test case 1', () => {
    var head = arrayToLinkedList([4, 5, 1, 9])
    var curr = head
    while (curr.val !== 5) {
        curr = curr.next
    }
    deleteNode(curr)
    expect(linkedListToArray(head)).toEqual([4, 1, 9])
})

test('test case 1', () => {
    var head = arrayToLinkedList([4, 5, 1, 9])
    var curr = head
    while (curr.val !== 1) {
        curr = curr.next
    }
    deleteNode(curr)
    expect(linkedListToArray(head)).toEqual([4, 5, 9])
})
