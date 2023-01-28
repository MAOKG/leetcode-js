# [18. 4Sum](https://leetcode.com/problems/4sum/)

Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

**Note**:
The solution set must not contain duplicate quadruplets.

## Example:

```
Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
```

## Pseudocode

```
FOUR-SUM(A, target)
    if len(A) < 4
        return []
    result = []
    A.sort()
    for i = 0:len(A)-1
        x = A[i]
        if i+1 < len(A)
            for j = i+1:len(A)-1
                y = A[j]
                l = j+1
                r = len(A)-1
                while l < r
                    sum = x+y+A[l]+A[r]
                    if sum = target
                        result.push([x,y,A[l],A[r]])
                        while l < r && A[l]=A[l+1]
                            l++
                        while l < r && A[r]=A[r-1]
                            r--
                        l++
                        r--
                    else if sum > target
                        r--
                    else
                        l++
                while j < len(A) && A[j]=A[j+1]
                    j++
        while i < len(A) && A[i]=A[i+1]
            i++
    return result
END

time: O(n^3)
space: O(n)
```
