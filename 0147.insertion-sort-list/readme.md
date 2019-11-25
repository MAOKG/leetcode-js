[147. Insertion Sort List](https://leetcode.com/problems/insertion-sort-list/)

**Algorithm of Insertion Sort:**

1. Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
2. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
3. It repeats until no input elements remain.

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
INSERTION-SORT-LIST(head)
    if head is null
        return null
    dummyHead = new ListNode(-INFINITE)
    dummyHead.next = head
    tail = head
    while tail.next
        ele = tail.next
        curr = dummyHead
        while curr && curr.next
            if curr = tail
                tail = ele
                break
            if  curr.val<ele.val <= curr.next
                tail.next = ele.next
                next = curr.next
                curr.next = ele
                ele.next = next
                break
            curr = curr.next
    return dummyHead.next
END
```
