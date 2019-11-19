[83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

Given a sorted linked list, delete all duplicates such that each element appear only once.

## Examples

Example 1:

```
Input: 1->1->2
Output: 1->2
```

Example 2:

```
Input: 1->1->2->3->3
Output: 1->2->3
```

## Pseudocode

```
DELETE-DUPLICATES(head)
    value = head.value
    curr = head.next
    prev = head
    while curr
        if curr.value = value
            prev.next = curr.next
            curr=curr.next
        else
            prev = curr
            value = curr.value
            curr = curr.next
    return head
END
```
