[20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

## Examples

Example 1:

```
Input: "()"
Output: true
```

Example 2:

```
Input: "()[]{}"
Output: true
```

Example 3:

```
Input: "(]"
Output: false
```

Example 4:

```
Input: "([)]"
Output: false
```

Example 5:

```
Input: "{[]}"
Output: true
```

## Pseudocode

```
IS-VALID(s)
    stack = new Stack<char>
    parenMap = new Map<char, char> {"(":")", "{":"}", "[":"]"}
    for i = 0:len(s)-1
        if parenMap.has(s[i])
            stack.push(s[i])
        else
            if stack.size = 0
                return false
            ele = stack.pop()
            if parenMap[ele] != s[i]
                return false
    if stack.size = 0
        return true
    return false
END
```
