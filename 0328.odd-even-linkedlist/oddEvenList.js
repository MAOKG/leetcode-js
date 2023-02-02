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
var oddEvenList = function (head) {
    if (!head) {
        return null
    }
    let oddTail = head
    let evenHead = null
    let evenTail = null
    let i = 2
    let curr = head.next

    while (curr) {
        if (i % 2 === 0) {
            if (evenTail) {
                evenTail.next = curr
                evenTail = curr
            } else {
                evenTail = curr
                evenHead = curr
            }
        } else {
            oddTail.next = curr
            oddTail = curr
        }
        i++
        curr = curr.next
    }
    if (evenTail) {
        evenTail.next = null
    }
    oddTail.next = evenHead
    return head
}
module.exports = oddEvenList
// runtime 60%
// memory 100%
