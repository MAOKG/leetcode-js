/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (wordList.includes(endWord)) {
        if (beginWord.length === 1) {
            return 2
        }
        const allWords = [...wordList, beginWord]
        const dictPatternWords = {}
        const dictWordPatterns = {}
        for (let i = 0; i < allWords.length; i++) {
            let w = allWords[i]
            dictWordPatterns[w] = []
            for (let j = 0; j < w.length; j++) {
                const pattern = w.substring(0, j) + '*' + w.substring(j + 1)
                dictWordPatterns[w].push(pattern)
                if (dictPatternWords[pattern]) {
                    dictPatternWords[pattern].push(w)
                } else {
                    dictPatternWords[pattern] = [w]
                }
            }
        }

        const visited = {}
        const q = new Queue()
        q.enqueue(new WordWithLevel(beginWord, 1))
        visited[beginWord] = true
        while (q.count() > 0) {
            let curr = q.dequeue()
            let patterns = dictWordPatterns[curr.word]
            for (let i = 0; i < patterns.length; i++) {
                let pattern = patterns[i]
                let neighbours = dictPatternWords[pattern]
                for (let j = 0; j < neighbours.length; j++) {
                    let neighbour = neighbours[j]
                    if (neighbour === endWord) {
                        return curr.level + 1
                    }
                    if (!visited[neighbour]) {
                        q.enqueue(new WordWithLevel(neighbour, curr.level + 1))
                        visited[neighbour] = true
                    }
                }
            }
        }
    }

    return 0
}

WordWithLevel = function(word, level) {
    this.word = word
    this.level = level
}

var Queue = function() {
    this._storage = {}
    this._head = 0
    this._tail = 0
}

Queue.prototype.count = function() {
    return this._tail - this._head
}

Queue.prototype.enqueue = function(value) {
    this._storage[this._tail++] = value
}

Queue.prototype.dequeue = function() {
    if (this.count() > 0) {
        const element = this._storage[this._head]
        delete this._storage[this._head]
        this._head++
        return element
    }
    return null
}

module.exports = ladderLength
// runtime 68%
// memory 18%
