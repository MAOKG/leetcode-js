# [16. 3Sum Closest](https://leetcode.com/problems/3sum-closest/)

Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

## Example

```
Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

## Pseudocode

```
THREE-SUM-CLOSEST(A, target)
    A.sort()
    minDiff = Int.Max
    for i = 0:len(A)-1
        l = i+1
        r = len(A)-1
        while l < r
            sum = A[i]+A[l]+A[r]
            if sum = target
                return target
            else if sum > target
                if |sum-target|<|minDiff|
                    minDiff=sum-target
                r--
            else
                if |sum-target|<|minDiff|
                    minDiff=sum-target
                l++
    return minDiff+target
END

time: O(n^2)
space: O(1)
```
