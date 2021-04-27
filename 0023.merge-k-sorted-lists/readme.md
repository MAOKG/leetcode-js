[23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

## Examples

Example 1:

```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
```

Example 2:

```
Input: lists = []
Output: []
```

Example 3:

```
Input: lists = [[]]
Output: []
```

**Constraints**:

-   k == lists.length
-   0 <= k <= 10^4
-   0 <= lists[i].length <= 500
-   -10^4 <= lists[i][j] <= 10^4
-   lists[i] is sorted in ascending order.
-   The sum of lists[i].length won't exceed 10^4.

## Pseudocode

```
MERGE-K-LISTS(lists)
  if lists.length = 0
    return null

  l = lists.length
  while l > 1
    for i => 0:l/2-1
      lists[i] = MERGE-2-LISTS(lists[i], lists[l-i-1])
    if l%2 = 1
      l = l/2 + 1
    else
      l = l/2
  return lists[0]
END

MERGE-2-LISTS(head1, head2)
  dummyNode = new ListNode()
  curr = dummyNode
  curr1 = head1
  curr2 = head2
  while curr1 && curr2
    if curr1.val < curr2.val
      curr.next = curr1
      curr1 = curr1.next
    else
      curr.next = curr2
      curr2 = curr2.next
    curr = curr.next
  if !curr1 && curr2
    curr.next = curr2
  if !curr2 && curr1
    curr.next = curr1
  return dummyHead.next
END
```
