[283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)

Given an integer array `nums`, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

Example 2:

```
Input: nums = [0]
Output: [0]
```

**Constraints**:

-   1 <= nums.length <= 10<sup>4</sup>
-   -2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1

## Pseudocode

```
MOVE-ZEROS(nums)
    if nums.length = 1
        return nums
    i = 0,j = 1
    while j < nums.length
        if nums[i] = 0
            if nums[j] = 0
                j++
            else
                swap(nums[i], nums[j])
                i++, j++
        else
            i++, j++
END

time: O(n)
space: O(1)
```

```
MOVE-ZEROS(nums)
    if nums.length = 1
        return nums
    k = 0 // [0, k) are all non-zero elements

    iterate through nums, such that
        [0, k) are non-zero elements in order
        [k, i] are zeros

    for i = 0 -> nums.length-1
        if nums[i] is not zero
            if i != k
                swap(nums[k], nums[i])
            k++
END

time: O(n)
space: O(1)
```
