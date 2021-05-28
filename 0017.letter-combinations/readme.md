[17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

```
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

Example 2:

```
Input: digits = ""
Output: []
```

Example 3:

```
Input: digits = "2"
Output: ["a","b","c"]
```

**Constraints**:

-   0 <= digits.length <= 4
-   digits[i] is a digit in the range ['2', '9'].

## Pseudocode

```
digitMap

LETTER-COMBINATIONS(digits)
  results = []
  FIND-COMB(digits, 0, "", results)
  return results
END

FIND-COMB(digits, index, prevStr, results)
  if digits is empty
    return

  letters = digitMap[digits[index]]
  for letter in letters
    str = prevStr + letter
    if index = digits.length-1
      results.push(str)
    else
      FIND-COMB(digits, index+1, str, results)
END
```
