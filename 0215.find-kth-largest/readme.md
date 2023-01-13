[215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

## Examples

Example 1:

```
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
```

Example 2:

```
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
```

**Constraints**:

-   1 <= k <= nums.length <= 104
-   -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>

## Pseudocode

1. Using Priority Queue

```
FIND-KTH-LARGEST(nums, k)
  pg = new MinPriorityQueue<int>()
  for num in nums
    if pg.size() < k
      pg.insert(num)
    else if num > pg.minimum()
      pg.extract-min()
      pg.insert(num)
  return pg.mininum()
END

time: O(nlogk)
space: O(k)
```

2. Using quick select

```
FIND-KTH-LARGEST(A, k)
  n = length(A)
  return RANDOMIZED-SELECT(A, 0, n-1, n-k+1)
END

// select kth smallest
RANDOMIZED-SELECT(A, l, r, k)
  if l = r
    return A[l]
  p = RANDOMIZED-PARITION(A, l, r)
  rank = p-l+1
  if rank = k
    return A[p]
  else if rank > k
    return RANDOMIZED-SELECT(A, l, p-1, k)
  else
    return RANDOMIZED-SELECT(A, p+1, r, k-rank)
END

RANDOMIZED-PARTITION(A, l, r)
  i = random from [l,...,r]
  swap A[i] and A[r]
  return PARITION(A, l, r)
END

PARTITION(A, l, r)
  parition array such that
  A[l, i] are < x, and A[i+1, j] >= x
  This way x should be placed at index i+1 when in sortrd order

  x = A[r]
  i = l - 1
  for j = l to r-1
    if A[j] < x
      i++
      swap A[i] and A[j]

  swap A[i+1] and A[r]
  return i + 1
END

time: O(n)
speac: O(1)
```
