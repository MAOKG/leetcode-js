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
    map = new HashMap<point, count>
    for i = 0:len(A)-1
        map[A[i]]++
    size(map) <= 2
        return len(A)
    max = 0
    arr = map.keys
    for i = 0:len(arr)
        for j = i+1:len(arr)
            count = 0
            for k = 0:len(arr)
                if IS-SAME-LINE(A[i], A[j], A[k])
                    count += map[A[k]]
            if count > max
                max = count
    return max
END


IS-SAME-LINE(A[i], A[j], A[k])
    return (A[j].y-A[i].y)(A[k].x-A[i].x) = (A[k].y-A[i].y)(A[j].x-A[i].x)
END
```

(j.y-i.y)/(j.x-i.x) = (k.y-i.y)/(k.x-i.x)
