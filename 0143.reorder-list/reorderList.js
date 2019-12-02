const ListNode = require('../utils/ListNode')

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) {
        return head
    }
    let mid = head
    let tail = head
    while (tail.next) {
        mid = mid.next
        tail = tail.next
        if (!tail.next) {
            break
        }
        tail = tail.next
    }
    let rightHead = mid.next
    mid.next = null
    rightHead = reverse(rightHead)
    merge(head, rightHead)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverse = function(head) {
    let pre = null
    let curr = head
    while (curr) {
        let next = curr.next
        curr.next = pre
        pre = curr
        curr = next
    }
    return pre
}

/**
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @return {void}
 */
var merge = function(head1, head2) {
    let curr1 = head1
    let curr2 = head2

    while (curr2) {
        let next = curr1.next
        curr1.next = curr2
        curr2 = curr2.next
        curr1.next.next = next
        curr1 = next
    }
}

module.exports = reorderList
// runtime 82%
// memory 100%
