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
    let stack1 = []
    let stack2 = []
    let c1 = l1
    let c2 = l2
    while (c1) {
        stack1.push(c1.val)
        c1 = c1.next
    }
    while (c2) {
        stack2.push(c2.val)
        c2 = c2.next
    }
    let carry = 0
    let curr = null
    let prev = null

    while (stack1.length || stack2.length || carry) {
        let val = carry
        if (stack1.length) {
            val += stack1.pop()
        }
        if (stack2.length) {
            val += stack2.pop()
        }
        if (val >= 10) {
            val -= 10
            carry = 1
        } else {
            carry = 0
        }
        curr = new ListNode(val)
        curr.next = prev
        prev = curr
    }
    return curr
}
module.exports = addTwoNumbers
// runtime 52%
// memory 67%
