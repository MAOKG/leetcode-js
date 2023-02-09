[206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

Reverse a singly linked list.

## Example:

```
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
```

## Pseudocode

```
REVERSE-LIST(head)
    curr = head
    prev = null
    while curr
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    return prev
END

time: O(n)
space: O(1)
```
