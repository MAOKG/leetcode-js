[401. Binary Watch](https://leetcode.com/problems/binary-watch/)

A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.

-   For example, the below binary watch reads "4:51".

Given an integer turnedOn which represents the number of LEDs that are currently on, return all possible times the watch could represent. You may return the answer in any order.

The hour must not contain a leading zero.

-   For example, "01:00" is not valid. It should be "1:00".

The minute must be consist of two digits and may contain a leading zero.

-   For example, "10:2" is not valid. It should be "10:02".

Example 1:

```
Input: turnedOn = 1
Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
```

Example 2:

```
Input: turnedOn = 9
Output: []
```

**Constraints**:

-   0 <= turnedOn <= 10

## Pseudocode

```
minutesMap = {
  0:1,
  1:2,
  2:4,
  3:8,
  4:16,
  5:32
}

hoursMap = {
  0:1,
  1:2,
  2:4,
  3:8
}

BINARY-WATCH(turnedOn)
  results = new Array
  curr = {minutes:0, hours:0}
  POPULATE-RESULTS(curr, 0, turnedOn, results)
  return results
END

POPULATE-RESULTS(curr, index, remain, results)
  if curr.minutes > 59 or curr.hours > 11
    return
  if remain is 0
    time = format(curr)
    results.push(time)
    return
  for i in index:9
    m = 0
    h = 0
    if i < 6
      m = minutesMap[i]
    else
      h = hoursMap[i-6]
    curr.minutes += m
    curr.hours += h
    POPULATE-RESULTS(curr, i+1, remain-1, results)
    curr.minutes -= m
    curr.hours -= h
END
```
