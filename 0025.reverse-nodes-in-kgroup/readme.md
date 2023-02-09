[25. Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)

Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

## Example

```
Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5
```

**Note**:

-   Only constant extra memory is allowed.
-   You may not alter the values in the list's nodes, only nodes itself may be changed.

## Pseudocode

```
REVERSE-K-GROUP(head, k)
    if k = 1
        return head
    dummyHead = new ListNode()
    dummyHead.next = head
    before = dummyHead
    curr = dummyHead
    i = 0
    while curr.next
        curr = curr.next
        i++
        if i = k
            end = REVERSE(before, curr)
            i = 0
            curr = end
            before = curr
    return dummyHead.next
END

REVERSE(before, tail)
    curr = before.next
    after = tail.next
    prev = null
    end = null
    while curr
        next = curr.next
        if prev
            curr.next = prev
        else
            curr.next = after
            end = curr
        if curr = tail
            before.next = curr
            break
        prev = curr
        curr = next
    return end
END

time: O(n)
space: O(1)
```

Using recursion

```
REVERSE-K-GROUP(head, k)
    a = head
    b = head
    for i = [0, k)
        if b is null
            return head
        b = b.next
    newHead = reverse(a, b)
    a.next = REVERSE-K-GROUP(b, k)
    return newHead
END

// reverse nodes [a, b)
REVERSE(a, b)
    pre = null
    curr = a

    while curr is not b
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    return prev
END

time: O(n)
space: O(n) due to call stack
```
