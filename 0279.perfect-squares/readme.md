[279. Perfect Squares](https://leetcode.com/problems/perfect-squares/)

Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

## Examples

Example 1:

```
Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.
```

Example 2:

```
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
```

**Constraints**:

1 <= n <= 10^4

## Pseudocode

Convert to a graph problem, each integer is a node, the problem becomes finding the shortest path from node n to node 0

```
PERFECT-SQUARES(n)
  q = new Queue<NodeWithLevel>()
  q.enqueue(new NodeWithLevel(n, 0))
  visited = new HashMap()
  visited[n] = true
  while q is not empty
    curr = q.dequeue()
    i = 1
    while true
      remain = curr - i*i
      if remain < 0
        break
      if remain is 0
        return curr.level+1
      if visited[remain] is false
        q.enqueue(new NodeWithLevel(remain, curr.level+1))
        visited[remain] = true
      i++
END

NodeWithLevel(val Int, level Int)
```
