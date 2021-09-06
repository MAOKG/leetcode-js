/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

class NestedIterator {
    static getLast(arr) {
        return arr[arr.length - 1]
    }
    /**
     * @constructor
     * @param {NestedInteger[]} nestedList
     */
    constructor(nestedList) {
        this.stack = [[nestedList, 0]]
    }
    /**
     * @this NestedIterator
     * @returns {boolean}
     */
    hasNext() {
        this.makeTopInteger()
        return this.stack.length > 0
    }
    /**
     * @this NestedIterator
     * @returns {integer}
     */
    next() {
        const lastPair = NestedIterator.getLast(this.stack)
        const [list, index] = lastPair
        lastPair[1]++
        return list[index].getInteger()
    }

    makeTopInteger() {
        while (this.stack.length > 0) {
            let lastPair = NestedIterator.getLast(this.stack)
            let [list, index] = lastPair

            if (list.length === index) {
                this.stack.pop()
                continue
            }
            if (list[index].isInteger()) {
                return
            }
            let subList = list[index].getList()
            this.stack.push([subList, 0])
            lastPair[1]++
        }
    }
}
/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

// runtime 11%
// memory 20%
