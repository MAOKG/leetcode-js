// Definition for singly-linked list.
function ListNode(val) {
    this.val = val
    this.next = null
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let curr1 = l1
    let curr2 = l2
    let dummyHead = new ListNode()
    let curr = dummyHead
    let carry = 0

    while (curr1 || curr2 || carry > 0) {
        let val = carry
        if (curr1) {
            val += curr1.val
            curr1 = curr1.next
        }
        if (curr2) {
            val += curr2.val
            curr2 = curr2.next
        }
        if (val >= 10) {
            val -= 10
            carry = 1
        } else {
            carry = 0
        }
        curr.next = new ListNode(val)
        curr = curr.next
    }

    return dummyHead.next
}

module.exports = addTwoNumbers
// runtime 97%
// memory 70%
