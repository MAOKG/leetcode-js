const ListNode = require('./../utils/ListNode')
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let curr1 = l1
    let curr2 = l2
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
module.exports = mergeTwoLists
// runtime 69%
// memory 28%
