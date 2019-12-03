[234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)

Given a singly linked list, determine if it is a palindrome.

## Examples

Example 1:

```
Input: 1->2
Output: false
```

Example 2:

```
Input: 1->2->2->1
Output: true
```

**Follow up**:
Could you do it in O(n) time and O(1) space?

## Pseudocode

```
IS-PALINDROME(head)
    if head is null or head.next is null
        return true
    mid = head
    tail = head.next
    while tail.next
        mid = mid.next
        tail = tail.next
        if tail.next
            tail = tail.next
        else
            break
    right = mid.next
    mid.next = null
    right = REVERSE(right)
    curr1 = head
    curr2 = right
    while curr2
        if curr1.val != curr2.val
            return false
        curr2 = curr2.next
        curr1 = curr1.next
    return true
END

REVERSE(head)
    curr = head
    pre = null
    while curr
        next = curr.next
        curr.next = pre
        pre = curr
        curr = next
    return pre
END
```
