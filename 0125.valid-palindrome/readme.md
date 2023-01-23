# [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

**Note**: For the purpose of this problem, we define empty string as valid palindrome.

## Examples

Example 1:

```
Input: "A man, a plan, a canal: Panama"
Output: true
```

Example 2:

```
Input: "race a car"
Output: false
```

## Pseudocode

```
IS-PALINDROME(s)
    i = 0, j = length(s)-1
    while (i < j) {
        if s[i] === s[j]
            i++, j--
        else if s[i] invalid
            i++
        else if s[j] invalid
            j--
        else
            return FALSE
    }

    return TRUE
END

time: O(n)
space: O(1)
```
