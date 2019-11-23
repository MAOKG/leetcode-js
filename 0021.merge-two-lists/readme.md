[21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

## Example

```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```

## Pseudocode

```
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
