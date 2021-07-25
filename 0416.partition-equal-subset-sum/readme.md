[416. Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)

Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Example 1:

```
Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
```

Example 2:

```
Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
```

**Constraints**:

-   1 <= nums.length <= 200
-   1 <= nums[i] <= 100

## Pseudocode

NAIVE RECURSIVE

```
CAN-PARTITION(nums)
  sum = 0
  for num from nums
    sum += num
  if sum is odd
    return false
  return CHECK-PARTITION(0, nums, sum/2)
END

CHECK-PARTITION(index, nums, sum)
  if sum is 0
    return true
  if sum < 0 or index is nums.length
    return false
  return CHECK-PARTITION(index+1, nums, sum) || CHECK-PARTITION(index+1, nums, sum - nums[index])
END
```

Recursion with memorization

```
CAN-PARTITION(nums)
  sum = 0
  for num from nums
    sum += num
  if sum is odd
    return false
  memo = new Array(nums.length, new Array(sum/2+1))
  return CHECK-PARTITION(0, nums, sum/2, memo)
END

CHECK-PARTITION(index, nums, sum, memo)
  if sum is 0
    return true
  if sum < 0 or index is nums.length
    return false
  if memo[index][sum] has value
    return memo[index][sum]
  memo[index][sum] = CHECK-PARTITION(index+1, nums, sum, memo) || CHECK-PARTITION(index+1, nums, sum - nums[index], memo)
  return memo[index][sum]
END
```

Dynamic programming

```
CAN-PARTITION(nums)
  sum = 0
  for num from nums
    sum += num
  if sum is odd
    return false
  s = sum/2
  memo = new Array(s+1, false)
  memo[0] = true

  for i from 0:n-1
    for j from s:nums[i]
      memo[j] = memo[j] || memo[j - nums[i]]

  return memo[s]
END
```
