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
var swapPairs = function(head) {
    let dummyHead = new ListNode()
    dummyHead.next = head
    before = dummyHead
    while (before.next && before.next.next) {
        let node1 = before.next
        let node2 = before.next.next
        let after = node2.next
        before.next = node2
        node2.next = node1
        node1.next = after
        before = node1
    }
    return dummyHead.next
}
module.exports = swapPairs
// runtime 94%
// memory 95%
