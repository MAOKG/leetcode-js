[450. Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)

Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

1. Search for a node to remove.
2. If the node is found, delete the node.

**Follow up**: Can you solve it with time complexity O(height of tree)?

Example 1:

```
Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.
```

Example 2:

```
Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.
```

Example 3:

```
Input: root = [], key = 0
Output: []
```

**Constraints**:

-   The number of nodes in the tree is in the range [0, 10^4].
-   -10^5 <= Node.val <= 10^5
-   Each node has a unique value.
-   root is a valid binary search tree.
-   -10^5 <= key <= 10^5

## Pseudocode

Iterative

```
DELETE-NODE(root, key)
  if !root
    return null
  curr = root
  parent = null
  while curr && curr.val != key
    parent = curr
    if curr.val > key
      curr = curr.left
    else
      curr = curr.right
  if !curr
    return root
  isLeftChild = parent.left is curr
  if curr has no children
    if curr is root
      return null
    if isLeftChild
      parant.left = null
    else
      parent.right = null
  else if curr has one child
    child = curr.left || curr.right
    if curr is root
      return child
    if isLeftChild
      parent.left = child
    else
      parent.right = child
  else
    sParent = curr
    s = curr.right
    isLeftSubTree = false
    while s.left
      isLeftSubTree = true
      sParent = s
      s = s.left
    curr.val = s.val
    if isLeftSubTree
      sParent.left = s.right
    else
      sParent.right = s.right
  return root
END
```

Recursive

```
DELETE-NODE(root, key)
  if !root
    return null
  if root.val is key
    if root has no children
      return null
    else if root has one child
      child = root.left || root.right
      return child
    else
      s = root.right
      while s.left
        s = s.left
      root.val = s.val
      root.right = DELETE-NODE(root.right, s.val)
  else if root.val > key
    root.left = DELETE-NODE(root.left, key)
  else
    root.right = DELTE-NODE(root.right, key)

  return root
END
```
