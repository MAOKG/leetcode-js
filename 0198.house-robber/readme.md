[198. House Robber](https://leetcode.com/problems/house-robber/)

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:

```
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
```

Example 2:

```
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
```

**Constraints**:

-   1 <= nums.length <= 100
-   0 <= nums[i] <= 400

## Pseudocode

Recursion

```
ROB(nums)
  return SOLVE(nums, 0)
END

SOLVE(nums, index)
  n = nums.length
  if index >= n
    return 0
  if index is n-1
    return nums[index]
  val1 = nums[index] + SOLVE(nums, index+2)
  vals = SOLVE(nums, index+1)
  return MAX(val1, val2)
END
```

Dynamic progamming

```
ROB(nums)
  n = nums.length
  memo = new Array<Int>(n, -1)
  memo[n-1] = nums[n-1]
  for i from n-2 to 0
    if memo[i] is -1
      val1 = memo[i+1]
      val2 = nums[i]
      if i+2 < n
        val2 += memo[i+2]
      memo[i] = MAX(val1, val2)
  return memo[0]
END
```
