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
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!head || !head.next) {
        return head
    }
    let i = 0
    let curr = head
    while (curr) {
        curr = curr.next
        i++
    }
    let middle = head
    let j = 1
    while (j < i / 2) {
        middle = middle.next
        j++
    }
    let l1 = head
    let l2 = middle.next
    middle.next = null
    let left = sortList(l1)
    let right = sortList(l2)
    return mergeTwoLists(left, right)
}

/**
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @return {ListNode}
 */
var mergeTwoLists = function (head1, head2) {
    let curr1 = head1
    let curr2 = head2
    let dummyHead = new ListNode()
    let curr = dummyHead
    while (curr1 || curr2) {
        if (curr1 && curr2) {
            if (curr1.val < curr2.val) {
                curr.next = curr1
                curr1 = curr1.next
            } else {
                curr.next = curr2
                curr2 = curr2.next
            }
        } else if (curr1) {
            curr.next = curr1
            curr1 = curr1.next
        } else {
            curr.next = curr2
            curr2 = curr2.next
        }
        curr = curr.next
    }
    return dummyHead.next
}

module.exports = sortList
// runtime 29%
// memory 100%
