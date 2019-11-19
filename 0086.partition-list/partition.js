/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let curr = head
    let leftHead = null
    let leftTail = null
    let rightHead = null
    let rightTail = null
    while (curr) {
        if (curr.val < x) {
            if (leftTail) {
                leftTail.next = curr
            } else {
                leftHead = curr
            }
            leftTail = curr
        } else {
            if (rightTail) {
                rightTail.next = curr
            } else {
                rightHead = curr
            }
            rightTail = curr
        }
        curr = curr.next
    }
    if (rightTail) {
        rightTail.next = null
    }
    if (leftHead) {
        leftTail.next = rightHead
        return leftHead
    }
    return rightHead
}
module.exports = partition
// runtime 99%
// memory 100%
