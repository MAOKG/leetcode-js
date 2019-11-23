[82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)

Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

## Example

Example 1:

```
Input: 1->2->3->3->4->4->5
Output: 1->2->5
```

Example 2:

```
Input: 1->1->1->2->3
Output: 2->3
```

## Pseudocode

```
DELETE-DUPLICATES(head)
    dummyHead = new ListNode()
    dummyHead.next = head
    curr = head
    prev = dummyHead
    val = null
    while curr
        if curr.val = val
            prev.next = curr.next
            curr = curr.next
        else if curr.next
            if curr.val = curr.next.val
                val = curr.val
                curr = curr.next.next
                prev.next = curr
            else
                prev.next = curr
                prev = curr
                curr = curr.next
        else
            prev.next = curr
            break
    return dummyHead.next
END
```
