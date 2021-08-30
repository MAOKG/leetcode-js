[44. Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)

Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '\*' where:

'?' Matches any single character.
'\*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Example 1:

```
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

Example 2:

```
Input: s = "aa", p = "*"
Output: true
Explanation: '*' matches any sequence.
```

Example 3:

```
Input: s = "cb", p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
```

Example 4:

```
Input: s = "adceb", p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
```

Example 5:

```
Input: s = "acdcb", p = "a*c?b"
Output: false
```

**Constraints**:

-   0 <= s.length, p.length <= 2000
-   s contains only lowercase English letters.
-   p contains only lowercase English letters, '?' or '\*'.

## Pseudocode

Recursion with memorization

```
IS-MATCH(s, p)
  if s is p
    return true
  memo = new Array<Array>(s.length, new Array(p.length, nulls))
  return CHECK-MATCH(s, p, 0, 0)
END

CHECK-MATCH(s, p, i, j, memo)
  if i is s.length
    return CHECK-END(p, j)
  if j is p.length
    return false

  if memo[i][j] has value
    return memo[i][j]

  res = false
  if p[j] is '*'
    // empty
    res = CHECK-MATCH(s, p, i, j+1, memo)
    // match current char
    res = res || CHECK-MATCH(s, p, i+1, j, memo)
  else if p[j] is '?' or s[i] is p[j]
    res = CHECK-MATCH(s, p, i+1, j+1, memo)

  memo[i][j] = res
  return res
END

CHECK-END(p, j)
  for index from j:p.length-1
    if p[index] != '*'
      return false
  return true
END
```
