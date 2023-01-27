# [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)

Given an array of strings, group anagrams together.

## Example

```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

**Note**

-   All inputs will be in lowercase.
-   The order of your output does not matter.

## Pseudocode

```
GROUP-ANAGRAMS(A)
    result = []
    map = new HashMap<str, index>

    for i = 0:len(A)-1
        str = A[i]
        sort(str)
        if map.has(str)
            result[map[str]].push(A[i])
        else
            map[str] = len(result)-1
            result.push([A[i]])
    return result
END

time: O(n)
space: O(n)
```
