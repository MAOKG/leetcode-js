# [447. Number of Boomerangs](https://leetcode.com/problems/3sum-closest/)

Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000]

## Example:

```
Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
```

## Pseudocode

```
NUMBER-OF-BOOMERANGS(A)
    result = 0
    for i = 0:len(A)-1
        map = new HashMap<distance^2, count>
        for j = 0:len(A)-1
            if i != j
                map[distanceSquare(A[i], A[j])]++
        for key in map
            if map[key] >= 2
                result += map[key] * (map[key]-1)
    return result
END
```
