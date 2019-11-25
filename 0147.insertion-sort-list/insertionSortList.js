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
var insertionSortList = function(head) {
    if (!head) {
        return null
    }
    let dummyHead = new ListNode(Number.NEGATIVE_INFINITY)
    dummyHead.next = head
    let tail = head
    while (tail.next) {
        let ele = tail.next
        let curr = dummyHead
        while (curr && curr.next) {
            if (curr === tail) {
                tail = ele
                break
            }
            if (curr.val < ele.val && ele.val <= curr.next.val) {
                tail.next = ele.next
                let next = curr.next
                curr.next = ele
                ele.next = next
                break
            }
            curr = curr.next
        }
    }
    return dummyHead.next
}
module.exports = insertionSortList
// runtime 33%
// memory 100%
