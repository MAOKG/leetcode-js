/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) {
        return head
    }
    let tail = head
    let n = 1
    while (tail.next) {
        tail = tail.next
        n++
    }
    tail.next = head
    if (k > n) {
        k = k % n
    }
    for (let i = 0; i < n - k; i++) {
        tail = tail.next
    }
    let newHead = tail.next
    tail.next = null
    return newHead
}
module.exports = rotateRight
// runtime 90%
// memory 100%
