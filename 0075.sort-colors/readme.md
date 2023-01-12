[75. Sort Colors](https://leetcode.com/problems/sort-colors/)

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Example 1:

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

Example 2:

```
Input: nums = [2,0,1]
Output: [0,1,2]
```

**Constraints**:

-   n == nums.length
-   1 <= n <= 300
-   nums[i] is either 0, 1, or 2.

Follow up: Could you come up with a one-pass algorithm using only constant extra space?

## Pseudocode

1. Using count sort

```
SORT-COLORS(nums)
    counts = new Array<Int>([0, 0, 0])
    for i = 0 -> nums.length-1
        counts[nums[i]]++
    for i = 0 -> nums.length-1
        if counts[0] > 0
            nums[i] = 0
            counts[0]--
        else if counts[1] > 0
            nums[i] = 1
            counts[1]--
        else
            nums[i] = 2
END

time: O(n)
space: O(1)
```

2. One pass using three way partition

have two pointers `zero` and `two` to partition the array such that

-   elements in [0, zero] equals to 0
-   elements in (zero, two) equals to 1
-   elements in [two, n-1] equals to 2

```
SORT-COLORS(nums)
    zero = -1, two = nums.length
    i = 0
    while i < two
        if nums[i] = 0
            zero++
            swap(nums[i], nums[zero])
            i++
        else if nums[i] = 2
            two--
            swap(nums[i], nums[two])
        else
            i++
END

time: O(n)
space: O(1)
```
