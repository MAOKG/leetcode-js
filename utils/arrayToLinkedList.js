const ListNode = require('./ListNode')

/**
 * @param {number[]} arr
 * @return {ListNode}
 */
const arrayToLinkedList = arr => {
    if (arr.length === 0) {
        return null
    }
    const head = new ListNode(arr[0])
    curr = head
    for (let i = 1; i < arr.length; i++) {
        let node = new ListNode(arr[i])
        curr.next = node
        curr = node
    }
    curr.next = null
    return head
}

module.exports = arrayToLinkedList
