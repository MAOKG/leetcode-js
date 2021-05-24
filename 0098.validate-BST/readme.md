[98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:

```
Input: root = [2,1,3]
Output: true
```

Example 2:

```
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

**Constraints**:

-   The number of nodes in the tree is in the range [1, 10^4].
-   -2^31 <= Node.val <= 2^31 - 1

## Pseudocode

```
IS-VALID-BST(root)
  return IS-VALID(root, -INFINITY, +INFINITY)
END

IS-VALID(node, min, max)
  if !node
    return true
  if node.left && (node.left.val >= node.val || node.left.val <= min)
    return false
  if node.right && (node.right.val <= node.val || node.right.val >= max)
    return false

  return IS-VALID(node.left, min, node.val) && IS-VALID(node.right, node.val, max)
END
```
