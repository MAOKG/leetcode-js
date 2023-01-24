# [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)

Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example 1:

```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
```

Example 2:

```
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
```

Example 3:

```
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
```

**Note**:

-   If there is no such window in S that covers all characters in T, return the empty string "".

-   If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

## Pseudocode

```
MIN-WINDOW(s, t)
    if len(s) < len(t)
        return ""
    if len(s) = 1
        if s = t
            return s
        else
            return ""
    tMap = new HashMap<char, freq>
    sMap = new HashMap<char, freq>
    count = 0
    for c in t
        tMap[c]++
    l = 0, r = 0
    result = ""
    while l <= r && r < len(s)
        if sMap[s[r]] < tMap[s[r]]
            count++
        sMap[s[r]]++

        while l <= r && sMap[s[l]] > tMap[s[l]]
            sMap[s[l]]--
            l++
        if count = len(t)
            UPDATE-RESULT(result, s, l,r)
        r++
    return result
END

UPDATE-RESULT(result,s, l, r)
    if result = '' || (r-l+1) < len(result)
        result = s[l:r]
END

time: O(m+n)
space: O(m+n)
```
