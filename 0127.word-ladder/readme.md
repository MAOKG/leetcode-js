[127. Word Ladder](https://leetcode.com/problems/word-ladder/)

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

-   Every adjacent pair of words differs by a single letter.
-   Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
-   sk == endWord

Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

## Examples

Example 1:

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
```

Example 2:

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
```

**Constraints**:

-   1 <= beginWord.length <= 10
-   endWord.length == beginWord.length
-   1 <= wordList.length <= 5000
-   wordList[i].length == beginWord.length
-   beginWord, endWord, and wordList[i] consist of lowercase English letters.
-   beginWord != endWord
-   All the words in wordList are unique.

## Pseudocode

```
WORD-LADDER(beginWord, endWord, wordList)
  if wordList.contain(endWord)
    visited = hashMap<word, bool>()
    queue = new Queue<WordWithLevel>()
    queue.enqueue(new WordWithLevel(beginWord, 1))
    visited[beginWord] = true
    while queue is not empty
      curr = queue.dequeue()
      for word in wordList
        if !visited[word] && IS-CONNECTED(curr.word, word)
          if word is endWord
            return curr.level + 1
          queue.enqueue(new WordWithLevel(word, curr.level+1))
          visited[word] = true
  return 0
END

IS-CONNECTED(word1, word2)
  if word1.length = word2.length
    diffCount = 0
    for i in 0:word1.length-1
      if word1[i] != word2[i]
        diffCount++
        if diffCount > 1
          return false
    if diffCount = 1
      return true
  return false
END

WordWithLevel(word String, level Int)
```
