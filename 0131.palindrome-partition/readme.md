[131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)

Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

A palindrome string is a string that reads the same backward as forward.

Example 1:

```
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
```

Example 2:

```
Input: s = "a"
Output: [["a"]]
```

**Constraints**:

-   1 <= s.length <= 16
-   s contains only lowercase English letters.

## Pseudocode

Solution 1

```
PARTITION(s)
  results = []
  GET-PARTITIONs(s, [], results)
  return results
END

GET-PARTITIONS(s, prev, results)
  if s is empty
    results.push(prev)
    return
  for i = 0:s.length-1
    sub = s[0:i]
    if IS-PALINDROME(sub)
      GET-PARTITION(s[i+1:], [...prev, sub], results)
END

IS-PALINDROME(s)
  if s is empty
    return false
  if s.length is 1
    return true
  for i = 0, j = s.length-1; i < j; i++, j--
    if s[i] != s[j]
      return false
  return true
END
```

Solution 2

```
PARTITION(s)
  results = []
  map = new HashMap<string, bool>()
  GET-PARTITIONs(s, [], results)
  return results
END


GET-PARTITIONS(s, prev, results, map)
  if s is empty
    results.push(prev)
    return
  for i = 0:s.length-1
    sub = s[0:i]
    isPalin = false
    if map has key sub
      isPalin = map[sub]
    else
      isPalin = IS-PALINDROME(sub)
      map[sub] = isPalin
    if isPalin
      GET-PARTITION(s[i+1:], [...prev, sub], results, map)
END

IS-PALINDROME(s)
  if s is empty
    return false
  if s.length is 1
    return true
  for i = 0, j = s.length-1; i < j; i++, j--
    if s[i] != s[j]
      return false
  return true
END
```
