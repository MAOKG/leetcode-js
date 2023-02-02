[24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

## Example

```
Given 1->2->3->4, you should return the list as 2->1->4->3.
```

## Pseudocode

```
SWAP-PAIRS(head)
    dummyHead = new ListNode()
    dummyHead.next = head
    before = dummyhead
    while before.next && before.next.next
        node1 = before.next
        node2 = before.next.next
        after = node2.next
        before.next = node2
        node2.next = node1
        node1.next = after
        before = node1
    return dummyHead.next
END

time: O(n)
space: O(1)
```
