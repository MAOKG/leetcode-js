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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (k === 1) {
        return head
    }
    let dummyHead = new ListNode()
    dummyHead.next = head
    let before = dummyHead
    let curr = dummyHead
    let i = 0
    while (curr.next) {
        curr = curr.next
        i++
        if (i === k) {
            let end = reverse(before, curr)
            i = 0
            curr = end
            before = curr
        }
    }
    return dummyHead.next
}

/**
 * @param {ListNode} before
 * @param {ListNode} tail
 * @return {ListNode}
 */
var reverse = function(before, tail) {
    let curr = before.next
    let after = tail.next
    let prev = null
    let end = null
    while (curr) {
        let next = curr.next
        if (prev) {
            curr.next = prev
        } else {
            curr.next = after
            end = curr
        }
        if (curr === tail) {
            before.next = curr
            break
        }
        prev = curr
        curr = next
    }
    return end
}
module.exports = reverseKGroup
// runtime 68%
// memory 100%
