[143. Reorder List](https://leetcode.com/problems/reorder-list/)

Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

## Examples

Example 1:

```
Given 1->2->3->4, reorder it to 1->4->2->3.
```

Example 2:

```
Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
```

## Pseudocode

```
REORDER-LIST(head)
    if list is shorter than 2
        return head
    mid = head
    tail = head
    while tail.next
        mid = mid.next
        tail = tail.next
        if tail.next is null
            break
        tail = tail.next
    rightHead = mid.next
    mid.next = null
    rightHead = REVERSE(rightHead)
    return MERGE(head, rightHead)
END

REVERSE(head)
    pre = null
    curr = head
    while curr
        next = curr.next
        curr.next = pre
        pre = curr
        curr = next
    return pre
END

MERGE(head1, head2)
    curr1 = head1
    curr2 = head2

    while curr2
        next = curr1.next
        curr1.next = curr2
        curr2 = curr2.next
        curr1.next.next = next
        curr1 = next
END
```
