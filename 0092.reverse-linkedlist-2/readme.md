[92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)

Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

## Example:

```
Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
```

## Pseudocode

```
REVERSE-BETWEEM(head, m, n)
    if m >= n
        return head
    i = 1
    curr = head
    prev = null
    while i < m
        prev = curr
        curr = curr.next
        i++
    before = prev
    tail = curr
    while i <= n
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
        i++

    tail.next = curr

    if before = null
        return prev
    else
        before.next = prev
        return head
END

time: O(n)
space: O(1)
```
