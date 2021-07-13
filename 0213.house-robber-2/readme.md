[213. House Robber II](https://leetcode.com/problems/house-robber-ii/)

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:

```
Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
```

Example 2:

```
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
```

Example 3:

```
Input: nums = [0]
Output: 0
```

**Constraints**:

-   1 <= nums.length <= 100
-   0 <= nums[i] <= 1000

## Pseudocode

Solution 1

```
ROB(nums)
  n = nums.length
  memo = new Array(n, -1)
  if n is 1
    return nums[0]
  memo[n-1] = nums[n-1]
  for i from n-2:1
    val1 = memo[i+1]
    val2 = nums[i]
    if i+2 < n
      val2 += memo[i+2]
    memo[i] = MAX(val1, val2)

  max = memo[1]
  memo[n-2] = nums[n-2]

  for i from n-3:0
    val1 = memo[i+1]
    val2 = nums[i]
    if i+2 < n-1
      val2 += memo[i+2]
    memo[i] = MAX(val1, val2)

  max = MAX(max, memo[0])
  return max
END
```

Solution 2

```
ROB(nums)
  n = nums.length
  if n is 1
    return nums[0]
  if n is 2
    return MAX(nums[0], nums[1])
  val1 = SOLVE(nums, 0, n-2)
  val2 = SOLVE(nums, 1, n-1)

  return MAX(val1, val2)
END

SOLVE(nums, start, end)
  prev = 0
  curr = 0
  for i from end:start
    temp = curr
    curr = MAX(curr, nums[i] + prev)
    prev = temp
  return curr
END
```
