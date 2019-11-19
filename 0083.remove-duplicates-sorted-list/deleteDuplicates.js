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
    if (!head) {
        return null
    }
    let value = head.val
    let curr = head.next
    let prev = head
    while (curr) {
        if (curr.val === value) {
            prev.next = curr.next
            curr = curr.next
        } else {
            prev = curr
            value = curr.val
            curr = curr.next
        }
    }
    return head
}

module.exports = deleteDuplicates
// runtime 60%
// memory 66%
