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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode()
    dummyHead.next = head
    let p = dummyHead
    let q = p
    for (let i = 0; i < n + 1; i++) {
        q = q.next
    }
    while (q) {
        p = p.next
        q = q.next
    }
    p.next = p.next.next

    return dummyHead.next
}
module.exports = removeNthFromEnd
// runtime 94%
// memory 37%
