const mergeKLists = require('./mergeKLists')
const arrayToLinkedList = require('../utils/arrayToLinkedList')
const linkedListToArray = require('../utils/linkedListToArray')

test('test case 1', () => {
    var input1 = arrayToLinkedList([1, 4, 5])
    var input2 = arrayToLinkedList([1, 3, 4])
    var input3 = arrayToLinkedList([2, 6])
    var lists = [input1, input2, input3]
    var result = mergeKLists(lists)

    expect(linkedListToArray(result)).toEqual([1, 1, 2, 3, 4, 4, 5, 6])
})

test('test case 2', () => {
    var lists = []
    var result = mergeKLists(lists)

    expect(linkedListToArray(result)).toEqual([])
})

test('test case 3', () => {
    var input1 = arrayToLinkedList([])
    var lists = [input1]
    var result = mergeKLists(lists)

    expect(linkedListToArray(result)).toEqual([])
})
test('test case 4', () => {
    var input1 = arrayToLinkedList([])
    var input2 = arrayToLinkedList([1])
    var lists = [input1, input2]
    var result = mergeKLists(lists)

    expect(linkedListToArray(result)).toEqual([1])
})
