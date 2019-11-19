[86. Partition List](https://leetcode.com/problems/partition-list/)

Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

## Example:

```
Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
```

## Pseudocode

```
PARTITION(head, x)
    curr = head
    leftHead = null
    leftTail = null
    rightHead = null
    rightTail = null
    while curr
        if curr.value < x
            if leftTail
                leftTail.next = curr
            else
                leftHead = curr
            leftTail = curr
        else
            if rightTail
                rightTail.next = curr
            else
                rightHead = curr
            rightTail = curr
        curr = curr.next
    if rightTail
        rightTail.next = null
    if leftHead
        leftTail.next = rightHead
        return leftHead
    else
        return rightHead
END
```
