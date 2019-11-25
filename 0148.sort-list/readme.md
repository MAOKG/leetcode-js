[148. Sort List](https://leetcode.com/problems/sort-list/)

Sort a linked list in O(n log n) time using constant space complexity.

## Examples

Example 1:

```
Input: 4->2->1->3
Output: 1->2->3->4
```

Example 2:

```
Input: -1->5->3->4->0
Output: -1->0->3->4->5
```

## Pseudocode

```
SORT-LIST(head)
    if head is null || head.next is null
        return head
    let i = 0
    let curr = head
    while curr
        i++
        curr = curr.next
    middle = head
    let j = 1
    while j < i/2
        middle = middle.next
        j++
    l1 = head
    l2 = middle.next
    middle.next = null
    left = SORT-LIST(l1)
    right = SORT-LIST(l2)
    result = MERGE-TWO-LISTS(head1, head2)
    return result
END

MERGE-TWO-LISTS(head1, head2)
    curr1 = head1
    curr2 = head2
    dummyHead = new ListNode()
    curr = dummyHead
    while curr1 || curr2
        if curr1 && curr2
            if curr1.val < curr2.val
                curr.next = curr1
                curr1 = curr1.next
            else
                curr.next = curr2
                curr2 = curr2.next
        else if curr1
            curr.next = curr1
            curr1 = curr1.next
        else
            curr.next = curr2
            curr2 = curr2.next
        curr = curr.next
    return dummyHead.next
END
```
