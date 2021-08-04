[139. Word Break](https://leetcode.com/problems/word-break/)

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:

```
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
```

Example 2:

```
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
```

Example 3:

```
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
```

**Constraints**:

-   1 <= s.length <= 300
-   1 <= wordDict.length <= 1000
-   1 <= wordDict[i].length <= 20
-   s and wordDict[i] consist of only lowercase English letters.
-   All the strings of wordDict are unique.

## Pseudocode

Recusion with memorization

```
WORD-BREAK(s, wordDict)
  memo = new Array<bool>(s.length, null)
  return CHECK-WORD(s, 0, wordDict, memo)
END

CHECK-WORD(s, index, wordDict, memo)
  if index >= s.length
    return true
  if memo[index] is not null
    return memo[index]

  for word in wordDict
    n = word.length
    if s.length-1-index >= n && s[index:index+n-1] is word && CHECK-WORD(s, index+n, wordDict, memo)
      memo[index] = true
      return true
  memo[index] = false
  return false
END
```

Dynamic programming

```
WORD-BREAK(s, wordDict)
  memo = new Array<bool>(s.length+1, false)
  memo[s.length] = true

  for i from s.length-1:0
    for word in wordDict
      n = word.length
      if i+n <= s.length && s[i:i+n-1] is word && memo[i+n]
        memo[i] = true
        break

  return memo[0]
END
```
