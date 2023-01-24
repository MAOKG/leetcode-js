# [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

Given a string, find the length of the longest substring without repeating characters.

## Examples

Example 1:

```
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

Example 2:

```
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

Example 3:

```
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Pseudocode

```
LENGTH-LONGEST-SUBSTRING(s)
    if len(s) < 2
        return len(s)
    max = 1
    i = 0
    j = 1
    charMap = HashMap<char, lastSeenIndex>
    charMap[s[i]] = 0
    while i < j && j < len(s)
        if charMap[s[j]] >= i
            i = charMap[s[j]] + 1
            charMap[s[j]] = j
        else
            charMap[s[j]] = j
            if j-i+1 > max
                max = j-i+1
        j++

    return max
END

time: O(n)
space: O(n)
```
