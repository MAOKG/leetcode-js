[219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/)

Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

## Examples

Example 1:

```
Input: nums = [1,2,3,1], k = 3
Output: true
```

Example 2:

```
Input: nums = [1,0,1,1], k = 1
Output: true
```

Example 3:

```
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

## Pseudocode

```
CONTAINS-DUPLICATE(A, k)
    set = new Set<int>
    for i = 0:len(A)-1
        if set.has(A[i])
            return true
        set.add(A[i])
        if i >= k
            set.remove(A[i-k])
    return false
END
```
