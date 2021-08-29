[10. Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '\*' where:

'.' Matches any single character.​​​​
'\*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Example 1:

```
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

Example 2:

```
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

Example 3:

```
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```

Example 4:

```
Input: s = "aab", p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
```

Example 5:

```
Input: s = "mississippi", p = "mis*is*p*."
Output: false
```

**Constraints**:

-   1 <= s.length <= 20
-   1 <= p.length <= 30
-   s contains only lowercase English letters.
-   p contains only lowercase English letters, '.', and '\*'.
-   It is guaranteed for each appearance of the character '\*', there will be a previous valid character to match.

## Pseudocode

Recursion

```
IS-MATCH(s, p)
  if s = p
    return true
  return CHECK-MATCH(s, p, 0, 0)
END

CHECK-MATCH(s, p, i, j)
  if i is s.length
    return CHECK-END(p, j)
  if j is p.length
    return false

  if j + 1 < p.length && p[j+1] is '*'
    res = false
    // 0 times
    res = res || CHECK-MATCH(s, p, i, j + 2)
    if s[i] is p[j] || p[j] is '.'
      // 1 or more times
      res = res || CHECK-MATCH(s, p, i+1, j)

    return res

  if s[i] is p[j] || p[j] is '.'
    return CHECK-MATCH(s, p, i+1, j+1)

  return false
END

CHECK-END(p, j)
  i = j
  while i < p.length
    if i + 1 < p.length && p[i+1] != '*'
      return false
    i += 2
  return i == p.length
END
```

Recursion with memorization

```
IS-MATCH(s, p)
  if s = p
    return true
  memo = new Array<Array>(s.length, new Array<Bool>(p.length, null))
  return CHECK-MATCH(s, p, 0, 0, memo)
END

CHECK-MATCH(s, p, i, j, memo)
  if i is s.length
    return CHECK-END(p, j)
  if j is p.length
    return false

  if memo[i][j] has value
    return memo[i][j]

  res = false
  if j + 1 < p.length && p[j+1] is '*'
    // 0 times
    res = res || CHECK-MATCH(s, p, i, j + 2, memo)
    if s[i] is p[j] || p[j] is '.'
      // 1 or more times
      res = res || CHECK-MATCH(s, p, i+1, j, memo)

  else if s[i] is p[j] || p[j] is '.'
    res = CHECK-MATCH(s, p, i+1, j+1, memo)

  memo[i][j] = res
  return res
END

CHECK-END(p, j)
  i = j
  while i < p.length
    if i + 1 < p.length && p[i+1] != '*'
      return false
    i += 2
  return i == p.length
END
```
