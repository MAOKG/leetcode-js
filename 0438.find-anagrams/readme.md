# [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

## Examples

Example 1:

```
Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```

Example 2:

```
Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
```

## Pseudocode

```
FIND-ANAGRAMS(s,p)
    if len(s) < len(p)
        return []
    if len(s) = 1
        if s = p
            return [0]
        else
            return []
    pMap = new HashMap<char, freq>
    sMap = new HashMap<char, freq>
    for c in p
        pMap[c]++
    result = []
    i = 0
    j = 0
    while i <= j && j < len(s) && i + len(p) - 1 < len(s)
        if sMap[s[j]] + 1 <= pMap[s[j]]
            sMap[s[j]]++
            if j-i+1 = len(p)
                result.add(i)
                sMap[s[i]]--
                i++
            j++
        else
            if !pMap.has(s[j])
                sMap.clear()
                i = j+1
                j++
            else
                sMap[s[i]]--
                i++
    return result
END

time: O(n)
space: O(n)
```
