const ListNode = require('./../utils/ListNode')
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null
    }
    let l = lists.length
    while (l > 1) {
        for (let i = 0; i < Math.floor(l / 2); i++) {
            lists[i] = merge2Lists(lists[i], lists[l - i - 1])
        }
        if (l % 2 === 1) {
            l = Math.ceil(l / 2)
        } else {
            l = l / 2
        }
    }

    return lists[0]
}

var merge2Lists = function(head1, head2) {
    const dummyNode = new ListNode()
    let curr = dummyNode
    let curr1 = head1
    let curr2 = head2
    while (curr1 && curr2) {
        if (curr1.val < curr2.val) {
            curr.next = curr1
            curr1 = curr1.next
        } else {
            curr.next = curr2
            curr2 = curr2.next
        }
        curr = curr.next
    }
    if (!curr1 && curr2) {
        curr.next = curr2
    }
    if (!curr2 && curr1) {
        curr.next = curr1
    }

    return dummyNode.next
}

module.exports = mergeKLists
// runtime 88%
// memory 60%
