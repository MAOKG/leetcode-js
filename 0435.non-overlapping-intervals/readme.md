[435. Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)

Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Example 1:

```
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
```

Example 2:

```
Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
```

Example 3:

```
Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
```

**Constraints**:

-   1 <= intervals.length <= 10^5
-   intervals[i].length == 2
-   -5 _ 10^4 <= starti < endi <= 5 _ 10^4

## Pseudocode

Greedy

```
NON-OVERLAP-COUNT(intervals)
  sort intervals:
    sort by end ASC, if end is equal, then sort by start ASC
  count = 1
  prev = intervals[0][1]
  for i from 1:intervals.length-1
    if intervals[i][0] >= prev
      count++
      prev = intervals[i][1]

  return intervals.length - count
END
```
