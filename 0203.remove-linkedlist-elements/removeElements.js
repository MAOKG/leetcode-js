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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummyHead = new ListNode()
    dummyHead.next = head
    let curr = dummyHead
    while (curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return dummyHead.next
}
module.exports = removeElements
// runtime 75%
// memory 25%
