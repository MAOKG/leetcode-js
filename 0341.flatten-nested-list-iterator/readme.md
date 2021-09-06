[341. Flatten Nested List Iterator](https://leetcode.com/problems/flatten-nested-list-iterator/)

You are givend a nested list of integers `nestedList`. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.

Implement the `NestedIterator` class:

-   `NestedIterator(List<NestedInteger> nestedList)` initializes the iterator with the nested list `nestedList`.
-   `int next()` Returns the next integer in the nested list.
-   `boolean hasNext()` Returns `true` if there are still some integers in the nested list and `false` otherwise.

## Examples

Example 1:

```
Input: nestedList = [[1,1],2,[1,1]]
Output: [1,1,2,1,1]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].
```

Example 2:

```
Input: nestedList = [1,[4,[6]]]
Output: [1,4,6]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].
```

**Constraints**

-   1 <= nestedList.length <= 500

-   The values of the integers in the nested list is in the range [-10^6, 10^6].

## Pseudocode

Recusion

```
FLATTEN-NESTED-LIST(nestedList)
  stack = new Stack<int>()
  FLATTEN(nestedList, stack)
END

FLATTEN(list, stack)
  for i in nestedList.length-1 => 0
    curr = nestedList[i]
    if curr.isInteger
      stack.push(curr.getInteger)
    else
      FLATTEN(curr.getList, stack)
END
```
