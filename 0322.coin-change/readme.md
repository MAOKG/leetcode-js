[322. Coin Change](https://leetcode.com/problems/coin-change)

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:

```
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
```

Example 2:

```
Input: coins = [2], amount = 3
Output: -1
```

Example 3:

```
Input: coins = [1], amount = 0
Output: 0
```

Example 4:

```
Input: coins = [1], amount = 1
Output: 1
```

Example 5:

```
Input: coins = [1], amount = 2
Output: 2
```

**Constraints**:

-   1 <= coins.length <= 12
-   1 <= coins[i] <= 2^31 - 1
-   0 <= amount <= 10^4

## Pseudocode

Recusion with memorization

```
COIN-CHANGE(coins, amount)
  coins.sort(desc)
  memo = new Array<Array>(coins.length, new Array<Int>(amount+1, null))
  return GET-NUM(coins, amount, 0, memo)
END

GET-NUM(coins, amount, index, memo)
  if amount is 0
    return 0
  if index >= coins.length or amount < 0
    return -1
  if memo[index][amount] is not null
    return memo[index][amount]
  res = -1
  res1 = GET-NUM(coins, amount, index+1, memo)
  res2 = GET-NUM(coins, amount-coins[index], index, memo)
  if res2 > -1
    res2 += 1
  if res1 > -1 && res2 > -1
    res = MIN(res1, res2)
  else if res1 < 0
    res = res2
  else
    res = res1
  memo[index][amount] = res
  return res
END
```

Dynamic programming

```
COIN-CHANGE(coins, amount)
  coins.sort()
  memo = new Array<Int>(amount+1, -1)
  memo[0] = 0
  for a from 1:amount
    if a >= coins[0] && memo[a - coins[0]] > -1
      memo[a] = 1 + memo[a - coins[0]]

  for i from 1:coins.length-1
    for a from 1:amount
      if a >= coins[i]
        val1 = memo[a - coins[i]]
        if val1 > -1
          val1 += 1
        val2 = memo[a]
        if val1 > -1 && val2 > -1
          memo[a] = MIN(val1, val2)
        else if val1 > -1
          memo[a] = val1
        else
          memo[a] = val2
  return memo[amount]
END
```
