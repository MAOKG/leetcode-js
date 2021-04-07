/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (wordList.includes(endWord)) {
        const visited = {}
        const q = new Queue()
        q.enqueue(new WordWithLevel(beginWord, 1))
        visited[beginWord] = true
        while (q.count() > 0) {
            let curr = q.dequeue()
            for (let i = 0; i < wordList.length; i++) {
                let w = wordList[i]
                if (!visited[w] && isConnected(curr.word, w)) {
                    if (w === endWord) {
                        return curr.level + 1
                    }
                    q.enqueue(new WordWithLevel(w, curr.level + 1))
                    visited[w] = true
                }
            }
        }
    }

    return 0
}

var isConnected = function(word1, word2) {
    if (word1.length === word2.length) {
        let diffCount = 0
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) {
                diffCount++
                if (diffCount > 1) return false
            }
        }
        if (diffCount === 1) {
            return true
        }
    }
    return false
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
// runtime 13%
// memory 75%
