[https://leetcode.com/problems/evaluate-reverse-polish-notation/](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, \*, /. Each operand may be an integer or another expression.

**note**:

-   Division between two integers should truncate toward zero.
-   The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.

## Examples

Example 1:

```
Input: ["2", "1", "+", "3", "*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
```

Example 2:

```
Input: ["4", "13", "5", "/", "+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
```

Example 3:

```
Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
Output: 22
Explanation:
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

```

## Pseudocode

```
EVAL-RPN(tokens)
    nums = new Stack<int>
    for i = 0:len(tokens)-1
        if tokens[i] is num
            nums.push(tokens[i])
        else
            a = nums.pop()
            b = nums.pop()
            val = b tokens[i] a
            nums.push(val)
    return nums.pop()
END
```
