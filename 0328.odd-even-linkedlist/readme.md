[328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/)

Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

## Examples

Example 1:

```
Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
```

Example 2:

```
Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
```

**Note**

-   The relative order inside both the even and odd groups should remain as it was in the input.

-   The first node is considered odd, the second node even and so on ...

## Pseudocode

```
ODD-EVENT-LIST(head)
    if head is null
        return null
    oddTail = head
    evenHead = null
    evenTail = null
    i = 2
    curr = head.next
    while curr
        if i is Even
            if evenHead is null
                evenHead = curr
                evenTail = curr
            else
                evenTail.next = curr
                evenTail = curr
        else
            oddTail.next = curr
            oddTail = curr
        curr = curr.next
        i++
    if evenTail
        evenTail.next = null
    oddTail.next = evenHead
    return head
END

time: O(n)
space: O(1)
```
