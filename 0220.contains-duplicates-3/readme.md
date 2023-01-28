[220. Contains Duplicate III](https://leetcode.com/problems/contains-duplicate-iii/description/)

You are given an integer array nums and two integers indexDiff and valueDiff.

Find a pair of indices (i, j) such that:

-   i != j,
-   abs(i - j) <= indexDiff.
-   abs(nums[i] - nums[j]) <= valueDiff, and

Return true if such pair exists or false otherwise.

Example 1:

```
Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
```

Example 2:

```
Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
Output: false
Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.
```

**Constraints**:

-   2 <= nums.length <= 10<sup>5</sup>
-   -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>
-   1 <= indexDiff <= nums.length
-   0 <= valueDiff <= 10<sup>9</sup>

## Explanation

We use the concept of sliding window and buckets together to achieve an optimal solution with O(N) time complexity.

Sliding window ensures only those indices are considered whose the absolute difference is at most k. We only consider k indices at a time. This fulfills the second condition.

Buckets are used to ensure that the absolute difference between two numbers is at most t. Let's take a deeper look at them.
We (floor) divide each number by t+1 and put it in a bucket with key as the quotient.
For example,

```
[1,5,2,4,3,9,1,5,9], k = 2, t = 3

1 // (3+1) = 0
5 // (3+1) = 1
2 // (3+1) = 0
4 // (3+1) = 1
3 // (3+1) = 0
9 // (3+1) = 2

Here, Bucket[0] will contain numbers 0,1,2,3.
Bucket[1] will contain numbers 4,5,6,7.
Bucket[2] will contain numbers 8,9,10,11.

On observing carefully, we can see that the absolute difference
between any two numbers in any bucket is at most t, which is what we want.

Also, there can be a case where the neighbouring bucket has some number
whose absolute difference with a number in the current bucket is at most t.
For instance, 2 lies in Bucket[0] and 4 lies in Bucket[1] and 4 - 2 = 2 < 3 (=t).
This can only happen in neighbouring buckets. Therefore, we need to check for this too.
```

## Pseudocode

```
CONTAINS-DUPLICATE(nums, indexDiff, valueDiff)
    buckets = new Map<Int, Int>()
    for i = 0:nums.length-1
        bucketId = nums[i] / (valueDiff+1)
        if buckets.has(bucketId)
            return true
        bucket.add(bucketId, nums[i])
        if buckets.has(bucketId+1) AND DIFF(buckets[bucketId+1], nums[i]) <= valueDiff
            return true
        if buckets.has(bucketId-1) AND DIFF(buckets[bucketId-1], nums[i]) <= valueDiff
            return true
        if buckets.size > indexDiff
            deleteId = nums[i-indexDiff] / (valueDiff + 1)
            buckets.remove(deleteId)
    return false
END

time: O(n)
space: O(indexDiff)
```
