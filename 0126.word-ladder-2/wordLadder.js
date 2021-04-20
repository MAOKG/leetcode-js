/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    if (wordList.includes(endWord)) {
        if (beginWord.length === 1) {
            return [[beginWord, endWord]]
        }
        const parentMap = {}
        const distanceMap = {}
        distanceMap[beginWord] = 0
        parentMap[beginWord] = null

        const dictPatternWords = {}
        const dictWordPatterns = {}
        const allWords = new Set([...wordList, beginWord])

        for (let word of allWords) {
            if (word !== beginWord) {
                parentMap[word] = []
            }
            dictWordPatterns[word] = []
            for (let i = 0; i < word.length; i++) {
                const pattern =
                    word.substring(0, i) + '*' + word.substring(i + 1)
                dictWordPatterns[word].push(pattern)
                if (dictPatternWords[pattern]) {
                    dictPatternWords[pattern].push(word)
                } else {
                    dictPatternWords[pattern] = [word]
                }
            }
        }
        const queue = new Queue()
        queue.enqueue(beginWord)
        while (queue.count() > 0) {
            let curr = queue.dequeue()
            let distance = distanceMap[curr]
            let patterns = dictWordPatterns[curr]
            for (let pattern of patterns) {
                let neighbours = dictPatternWords[pattern]
                for (let neighbour of neighbours) {
                    if (neighbour !== curr) {
                        if (distanceMap[neighbour]) {
                            if (distanceMap[neighbour] > distance + 1) {
                                distanceMap[neighbour] = distance + 1
                                parentMap[neighbour] = [curr]
                            } else if (
                                distanceMap[neighbour] ===
                                distance + 1
                            ) {
                                parentMap[neighbour].push(curr)
                            }
                        } else {
                            distanceMap[neighbour] = distance + 1
                            parentMap[neighbour] = [curr]
                            queue.enqueue(neighbour)
                        }
                    }
                }
            }
        }
        const paths = []
        const path = []
        getPaths(endWord, parentMap, paths, path, beginWord)
        return paths
    }

    return []
}

var getPaths = function(curr, parentMap, paths, path, beginWord) {
    let currPath = [...path, curr]
    if (curr === beginWord) {
        paths.push(currPath.reverse())
        return
    }
    let parents = parentMap[curr] || []
    for (let parent of parents) {
        getPaths(parent, parentMap, paths, currPath, beginWord)
    }
}

var Queue = function() {
    this._storage = {}
    this._head = 0
    this._tail = 0
}

Queue.prototype.count = function() {
    return this._tail - this._head
}

Queue.prototype.enqueue = function(ele) {
    this._storage[this._tail++] = ele
}

Queue.prototype.dequeue = function() {
    if (this.count() > 0) {
        const ele = this._storage[this._head]
        delete this._storage[this._head]
        this._head++
        return ele
    }
    return null
}

module.exports = findLadders
// runtime 93%
// memory 28%
