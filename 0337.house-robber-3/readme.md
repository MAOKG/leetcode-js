[337. House Robber III](https://leetcode.com/problems/house-robber-iii/)

The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.

Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night.

Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.

Example 1:

```
Input: root = [3,2,3,null,3,null,1]
Output: 7
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
```

Example 2:

```
Input: root = [3,4,5,1,3,null,1]
Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
```

**Constraints**:

-   The number of nodes in the tree is in the range [1, 10^4].
-   0 <= Node.val <= 10^4

## Pseudocode

```
ROB(root)
  map = new HashMap<TreeNode, Int>()
  return SOLVE(root, map)
END

SOLVE(root, map)
  if !root
    return 0
  if map[root] exist
    return map[root]
  val1 = root.val
  val2 = SOLVE(root.left, map) + SOLVE(root.right, map)
  if root.left
    val1 += SOLVE(root.left.left, map) + SOLVE(root.left.right, map)
  if root.right
    val1 += SOLVE(root.right.left, map) + SOLVE(root.right.right, map)
  val = MAX(val1, val2)
  map[root] = val
  return val
END
```
