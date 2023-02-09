const ListNode = require('../utils/ListNode')
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
    let curr = head
    let dummyHead = new ListNode()

    while (curr) {
        next = curr.next
        insert(curr, dummyHead)
        curr = next
    }

    return dummyHead.next
}

var insert = function (node, dummyHead) {
    let curr = dummyHead.next
    let prev = dummyHead
    while (curr) {
        if (curr.val > node.val) {
            break
        }
        let next = curr.next
        prev = curr
        curr = next
    }

    prev.next = node
    node.next = curr

    return dummyHead
}
module.exports = insertionSortList
// runtime 73%
// memory 82%
