# [149. Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line/)

Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

## Examples

Example 1:

```
Input: [[1,1],[2,2],[3,3]]
Output: 3
Explanation:
^
|
|        o
|     o
|  o
+------------->
0  1  2  3  4
```

Example 2:

```
Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
Explanation:
^
|
|  o
|     o        o
|        o
|  o        o
+------------------->
0  1  2  3  4  5  6
```

## Pseudocode

```
MAX-POINTS(A)
    max = 0
    for i = 0:len(A)-1
        samePointsCount = 0
        slopeMap = new HashMap(slope, count)
        localMax = 0
        for j = i:len(A)-1
            if A[i] = A[j]
                samePointsCount++
            else
                slope = SLOPE(A[i], A[j])
                slopeMap[slope]++
                if slopeMap[slope] > localMax
                    localMax = slopeMap[slope]
        localMax += samPointsCount
        if localMax > max
            max = localMax
    return max
END


SLOPE(p, q)
    dy = q.y-p.y
    dx = q.x-p.x
    if dy = 0
        return 0/1
    if dx = 0
        return 1/0
    isNegavtive = (dy > 0 && dx < 0) || (dy < 0 && dx > 0)
    dy = abs(dy), dx=abs(dx)
    gcd = FIND-GCD(dx, dy)
    dy = dy/gcd
    dx = dx/gcd
        return dy/dx (with negative sign if it is negative)
END

FIND-GCD(a, b)
    if a = 0
        return b
    return FIND-GCD(b%a, a)
END
```

## Reference

[Euclidean algorithm to find greatest common divisor of two integers](https://www.geeksforgeeks.org/c-program-find-gcd-hcf-two-numbers/)
