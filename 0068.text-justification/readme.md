[68. Text Justification](https://leetcode.com/problems/text-justification/)

Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.

Example 1:

```
Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
```

Example 2:

```
Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified becase it contains only one word.
```

Example 3:

```
Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
```

**Constraints**:

-   1 <= words.length <= 300
-   1 <= words[i].length <= 20
-   words[i] consists of only English letters and symbols.
-   1 <= maxWidth <= 100
-   words[i].length <= maxWidth

## Pseudocode

```
FULLY-JUSTIFY(words, maxWidth)
  rows = new Array<Array>()
  currRow = 0
  remain = maxWidth
  for word in words
    if word.length > remain
      currRow++
      remain = maxWidth
    rows[currRow].push(word)
    remain -= word.length+1

  res = new Array<String>()
  for i from 0:rows.length-1
    isLast = i == rows.length-1
    str = JUSTIFY(rows[i], maxWidth, isLast)
    res.push(str)
  return res
END

JUSTIFY(row, maxWidth, isLast)
  res = "
  if isLast || row.length < 2
    res = row.join(" ")
  else
    spaces = maxWidth - row.join("").length
    spaceCount = spaces / (row.length - 1)
    extraSpaceCount = spaces % (row.length - 1)
    for i from 0:row.length-1
      res += row[i]
      if i is not row.length-1
        count = spaceCount
        if extraSpaceCount > 0
          count++
          extraSpaceCount--
        res = res fill count number of whitespaces


  if res.length < maxWidth
    res = res fill remaining whiteSpaces
  return res

END
```
