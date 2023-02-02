[203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/)

Remove all elements from a linked list of integers that have value val.

## Example

```
Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
```

## Pseudocode

```
REMOVE-ELEMENTS(head, val)
    dummyHead = new ListNode()
    dummyHead.next = head
    curr = dummyHead
    while curr.next
        if curr.next.val = val
            curr.next = curr.next.next
        else
            curr = curr.next
    return dummyHead.next
END

time: O(n)
space: O(1)
```
