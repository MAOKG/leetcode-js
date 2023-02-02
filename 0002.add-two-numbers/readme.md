[2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

## Example

```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

## Pseudocode

```
ADD-TWO-NUMBERS(head1, head2)
    curr1 = head1
    curr2 = head2
    dummyHead = new Node()
    curr = dummyHead
    carry = 0
    while curr1 || curr2 || carry > 0
        val = carry
        if curr1
            val += curr1.val
            curr1 = curr1.next
        if curr2
            val += curr2.val
            curr2 = curr2.next
        if val >= 10
            val -= 10
            carry = 1
        else
            carry = 0
        curr.next = new Node(val)
        curr = curr.next
    return dummyHead.next
END

time: O(n)
space: O(n)
```
