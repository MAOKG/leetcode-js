# [454. 4Sum II](https://leetcode.com/problems/4sum-ii/)

Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -2^28 to 2^28 - 1 and the result is guaranteed to be at most 2^31 - 1.

## Example

```
Input:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

Output:
2

Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
```

## Pseudocode

```
FOUR-SUM-COUNT(A,B,C,D)
    count = 0
    map = new HashMap<value, frequency>
    for i = 0:len(A)-1
        for j = 0:len(B)-1
            map[A[i]+B[j]]++
    for i = 0:len(C)-1
        for j = 0:len(D)-1
            if map.has(0-C[i]-D[j])
                count+=map[0-C[i]-D[j]]
    count++
END

time: O(n^2)
space: O(n^2)
```
