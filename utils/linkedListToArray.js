const ListNode = require('./ListNode')

/**
 * @param {ListNode} head
 * @return {number[]}
 */
const linkedListToArray = head => {
    const result = []
    let curr = head

    while (curr) {
        result.push(curr.val)
        curr = curr.next
    }
    return result
}

module.exports = linkedListToArray
