# [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)

Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

## Example

```
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
```

## Pseudocode

```
MIN-SUB-ARRAY-LEN(s, A)
    if len(A) = 0
        return 0
    minLen = len(A)+1
    currSum = A[0]
    l = 0
    r = 0

    while l <= r
        if currSum >= s
            if r-l+1 < minLen
                minLen = r-l+1
            currSum -= A[l]
            l++
        else
            if r = len(A)-1
                break
            r++
            currSum += A[r]

    if minLen = len(A)+1
        return 0
    else
        return minLen
END
```
