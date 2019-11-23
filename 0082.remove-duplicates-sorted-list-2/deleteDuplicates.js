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
var deleteDuplicates = function(head) {
    let dummyHead = new ListNode()
    dummyHead.next = head
    let curr = head
    let prev = dummyHead
    let val = null
    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next
            curr = curr.next
        } else if (curr.next) {
            if (curr.val === curr.next.val) {
                val = curr.val
                curr = curr.next.next
                prev.next = curr
            } else {
                prev.next = curr
                prev = curr
                curr = curr.next
            }
        } else {
            prev.next = curr
            break
        }
    }
    return dummyHead.next
}
module.exports = deleteDuplicates
// runtime 69%
// memory 50%
