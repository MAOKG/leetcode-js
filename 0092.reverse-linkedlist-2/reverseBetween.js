const arrayToLinkedList = require('../utils/arrayToLinkedList')
const linkedListToArray = require('../utils/linkedListToArray')
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    if (m >= n) {
        return head
    }
    let curr = head
    let prev = null
    let i = 1
    while (i < m) {
        prev = curr
        curr = curr.next
        i++
    }
    let before = prev
    let tail = curr
    while (i <= n) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
        i++
    }
    tail.next = curr

    if (before === null) {
        return prev
    }
    before.next = prev
    return head
}

module.exports = reverseBetween
// runtime 80%
// memory 57%
