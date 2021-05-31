[93. Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/)

Given a string s containing only digits, return all possible valid IP addresses that can be obtained from s. You can return them in any order.

A valid IP address consists of exactly four integers, each integer is between 0 and 255, separated by single dots and cannot have leading zeros. For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses and "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.

Example 1:

```
Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]
```

Example 2:

```
Input: s = "0000"
Output: ["0.0.0.0"]
```

Example 3:

```
Input: s = "1111"
Output: ["1.1.1.1"]
```

Example 4:

```
Input: s = "010010"
Output: ["0.10.0.10","0.100.1.0"]
```

Example 5:

```
Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
```

**Constraints**:

-   0 <= s.length <= 3000
-   s consists of digits only.

## Pseudocode

```
RESTORE-IP(s)
  results = []
  FIND-IP(s, [], results)
  return results
END

FIND-IP(remain, prev, results)
  if remain is empty
    if prev.length is 4
      results.push(prev.join("."))
    return

  if prev.length is greater than 3
    return

  for i = 0; i < 3 && i < remain.length; i++
    curr = remain[0:i]
    if IS-VALID(curr)
      FIND-IP(remain[i+1:], [...prev, curr], results)
END

IS-VALID(i)
  if i starts with 0 and i is not 0
    return false
  if i is grater than 255
    return false
  return true
END
```
