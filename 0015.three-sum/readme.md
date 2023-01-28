# [15. 3Sum](https://leetcode.com/problems/3sum/)

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

**Note**:
The solution set must not contain duplicate triplets.

## Example:

```
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

## Pseudocode

```
THREE-SUM(A)
    if len(A) < 3
        return []
    result = []
    A.sort()
    for i = 0:len(A)-1
        curr = A[i]
        l = i+1
        r = len(A) - 1
        while l < r
            if curr+A[l]+A[r]=0
                result.push([curr,A[l],A[r]])
                while A[l]=A[l+1] && l<r
                    l++
                while A[r]=A[r-1] && l<r
                    r--
                l++
                r--
            else if curr+A[l]+A[r]>0
                r--
            else
                l++
        while i < len(A) && A[i]=A[i+1]
            i++
    return result
END

time: O(n^2)
space: O(n)
```
