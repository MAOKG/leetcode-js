[236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
```

Example 2:

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
```

Example 3:

```
Input: root = [1,2], p = 1, q = 2
Output: 1
```

**Constraints**:

-   The number of nodes in the tree is in the range [2, 10^5].
-   -10^9 <= Node.val <= 10^9
-   All Node.val are unique.
-   p != q
-   p and q will exist in the tree.

## Pseudocode

```
LCA(root, p, q)
  pMap = new Map<num, bool>()
  qMap = new Map<num, bool>()
  MAP(root, p, pMap)
  MAP(root, q, qMap)

  queue = new Queue<TreeNode>()
  queue.enqueue(root)
  while queue is not empty
    curr = queue.dequeue()
    bothInLeft = curr.left && pMap(curr.left.val) && qMap(curr.left.val)
    bothInRight = curr.right && pMap(curr.right.val) && qMap(curr.right.val)
    if !bothInLeft && !bothInRight
      return curr
    if bothInLeft
      queue.enqueue(curr.left)
    else
      queue.enqueue(curr.right)

  return null
END

MAP(node, target, map)
  if node
    MAP(node.left, target, map)
    MAP(node.right, target, map)
    isInLeft = node.left && map(node.left.val)
    isInRight = node.right && map(node.right.val)
    isContain = isInLeft || isInRight || node is target

    map[node.val] = isContain
END


left contains p
right contains q
```
