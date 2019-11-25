[19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

Given a linked list, remove the n-th node from the end of list and return its head.

## Example

```
Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
```

**Note** :

Given n will always be valid.

**Follow up**:

Could you do this in one pass?

## Pseudocode

```
REMOVE-NTH-FROM-END(head, n)
    dummyHead = new ListNode()
    dummyHead.next = head
    p = dummyHead
    q = p
    i = 0
    while i < n+1
        q = q.next
        i++
    while q
        p = p.next
        q = q.next
    p.next = p.next.next

    return dummyHead.next
END
```
