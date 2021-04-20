[126. Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

-   Every adjacent pair of words differs by a single letter.
-   Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
-   sk == endWord

Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].

## Examples

Example 1:

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
Explanation: There are 2 shortest transformation sequences:
"hit" -> "hot" -> "dot" -> "dog" -> "cog"
"hit" -> "hot" -> "lot" -> "log" -> "cog"
```

Example 2:

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: []
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
    if beginWord.length is 1
      return [beginWord, endWord]
    parantMap = new HashMap<string, array>
    distanceMap = new HashMap<string, int>
    distanceMap[beginWord] = 0

    dictPatternWords = new HashMap<string, array>
    dictWordPatterns = new HashMap<string, array>
    allWords = [...wordList, beginWord]

    for word in allWords
      dictWordPatterns[word] = []
      for i in 0:word.length-1
        pattern = word replace char at index i to *
        dictWordPatterns[word].push[pattern]
        if dictPatternWords[pattern]
          dictPatternWords[pattern].push(word)
        else
          dictPatternWords[pattern] = [word]
    queue = new Queue<string>()
    queue.enqueue(beginWord)
    while queue is not empty
      curr = queue.dequeue()
      distance = distanceMap[curr]
      patterns = dictWordPatterns[curr]
      for pattern in patterns
        neighbours = dictPatternWords[pattern]
        for neighbour in neighbours
          if distanceMap has neighbour
            if distanceMap[neighbour] > distance + 1
              distanceMap[neighbour] = distance + 1
              parentMap[neighbour] = [curr]
            else if distanceMap[neighbour] == distance + 1
              parentMap[neighbour].push(curr)
          else
            distanceMap[neighbour] = distance + 1
            parentMap[neighbour] = [curr]
            queue.enqueue(neighbour)
    paths = []
    path = []
    return GET-PATHS(endWord, parentMap, paths, path, beginWord)
  return []
END

GET-PATHS(curr, parentMap, paths, path, beginWord)
    currPath = path.copy().push(curr)
  if curr is beginWord
    paths.push(currPath.reverse())
    return
  for p in parentMap[curr]
    GET-PATHS(p, parentMap, paths, currPath, beginWord)
END
```
