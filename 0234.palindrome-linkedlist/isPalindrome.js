/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) {
        return true
    }
    let mid = head
    let tail = head.next
    while (tail.next) {
        mid = mid.next
        tail = tail.next
        if (tail.next) {
            tail = tail.next
        } else {
            break
        }
    }
    let right = mid.next
    mid.next = null
    right = reverse(right)
    curr1 = head
    curr2 = right
    while (curr2) {
        if (curr1.val !== curr2.val) {
            return false
        }
        curr2 = curr2.next
        curr1 = curr1.next
    }
    return true
}

/**
 * @param {ListNode} head
 * @param {ListNode}
 */
var reverse = function(head) {
    let curr = head
    let pre = null
    while (curr) {
        let next = curr.next
        curr.next = pre
        pre = curr
        curr = next
    }
    return pre
}
module.exports = isPalindrome
// runtime 95%
// memory 94%
