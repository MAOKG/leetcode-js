[474. Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/)

You are given an array of binary strings strs and two integers m and n.

Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.

A set x is a subset of a set y if all elements of x are also elements of y.

Example 1:

```
Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
Output: 4
Explanation: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
{"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.
```

Example 2:

```
Input: strs = ["10","0","1"], m = 1, n = 1
Output: 2
Explanation: The largest subset is {"0", "1"}, so the answer is 2.
```

**Constraints**:

-   1 <= strs.length <= 600
-   1 <= strs[i].length <= 100
-   strs[i] consists only of digits '0' and '1'.
-   1 <= m, n <= 100

## Pseudocode

Recursion with memorization

```
FIND-MAX(strs, m, n)
  zeros = new Array<Int>(strs.length, 0)
  ones = new Array<Int>(strs.length, 0)
  for i from 0:strs.length-1
    for j from 0:strs[i].length
      if strs[i][j] is '0'
        zeros[i]++
      else
        ones[i]++
  memo = new Array<Array>(strs.length, new Array<Array>(m+1, new Array<Int>(n+1, -1)))
  return GET-MAX(m, n, 0, zeros, ones, memo)
END

GET-MAX(m, n, index, zeros, ones, memo)
  if index >= zeros.length
    return 0
  if memo[index][m][n] > -1
    return memo[index][m][n]
  if zeros[index] > m or ones[index] > n
    return GET-MAX(m, n, index+1, zeros, ones, memo)
  val1 = GET-MAX(m, n, index+1, zeros, ones, memo)
  val2 = 1 + GET-MAX(m - zeros[index], n-ones[index], index+1, zeros, ones, memo)
  memo[index][m][n] = MAX(val1, val2)
  return memo[index][m][n]
END
```

Dynamic programming

```
FIND-MAX(strs, m, n)
  zeros = new Array<Int>(strs.length, 0)
  ones = new Array<Int>(strs.length, 0)
  for i from 0:strs.length-1
    for j from 0:strs[i].length
      if strs[i][j] is '0'
        zeros[i]++
      else
        ones[i]++
  memo = new Array<Array>(m+1, new Array<Int>(n, 0))
  for i from 0:str.length-1
    oneCount = ones[i]
    zeroCount = zeros[i]
    if oneCount > n or zeroCount > m
      continue
    for x from m:zeroCount
      for y from n:oneCount
        curr = 1 + memo[x-zeroCount][y-onesCount]
        if curr > memo[x][y]
          memo[x][y] = curr

  return memo[m][n]
END
```
