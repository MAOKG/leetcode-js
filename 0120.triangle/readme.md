[120. Triangle](https://leetcode.com/problems/triangle/)

Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

Example 1:

```
Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
```

Example 2:

```
Input: triangle = [[-10]]
Output: -10
```

**Constraints**:

-   1 <= triangle.length <= 200
-   triangle[0].length == 1
-   triangle[i].length == triangle[i - 1].length + 1
-   -10^4 <= triangle[i][j] <= 10^4

**Follow up**: Could you do this using only O(n) extra space, where n is the total number of rows in the triangle?

```
MIN-TOTAL(triangle)
   n = triangle.length
   if n is 1
      return triangle[0][0]
   memo = new Array<int>(n, 0)
   for i from n-1:0
      for j from 0:i
         memo[j] += triangle[i][j]
      for j from 0:i-1
         memo[j] = MIN(memo[j], memo[j+1])
   return memo[0]
END
```