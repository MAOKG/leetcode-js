[445. Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/)

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Follow up**:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

## Example

```
Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
```

## Pseudocode

```
ADD-TWO-NUMBERS(head1, head2)
    stack1 = new Stack<Int>
    stack2 = new Stack<Int>
    c1 = head1
    c2 = head2
    while c1
        stack1.push(c1.val)
        c1 = c1.next
    while c2
        stack2.push[]
        c2 = c2.next
    carry = 0
    prev = null
    curr = null
    while stack1.notEmpty || stack2.notEmpty || carry > 0
        val = carry
        if stack1.notEmpty
            val += stack1.pop()
        if stack2.notEmpty
            val += stack2.pop()
        if val >= 10
            val -= 10
            carry = 1
        else
            carry = 0
        curr = new ListNode(val)
        curr.next = prev
        prev = curr
    return curr
END

time: O(n)
space: O(n)
```
