/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    const trie = new Trie()
    for (let word of words) {
        trie.insert(word)
    }
    const m = board.length
    const n = board[0].length

    const results = new Set()
    const visited = new Array(m).fill(0).map((ele) => new Array(n).fill(false))
    const root = trie.root
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let letter = board[i][j]
            if (root.contains(letter)) {
                let node = root.get(letter)
                getWords(board, i, j, node, visited, results)
            }
        }
    }

    return [...results]
}

const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
]

var getWords = function (board, i, j, node, visited, results) {
    if (node.word) {
        results.add(node.word)
    }
    visited[i][j] = true

    for (let direction of directions) {
        let newX = i + direction[0]
        let newY = j + direction[1]
        if (checkOnBoard(board, newX, newY) && !visited[newX][newY]) {
            let letter = board[newX][newY]
            if (node.contains(letter)) {
                let nextNode = node.get(letter)
                getWords(board, newX, newY, nextNode, visited, results)
            }
        }
    }

    visited[i][j] = false
}

var checkOnBoard = function (board, i, j) {
    const m = board.length
    const n = board[0].length

    return i >= 0 && i < m && j >= 0 && j < n
}

class TrieNode {
    constructor() {
        this.word = null
        this.children = new Map()
    }

    contains(letter) {
        return this.children.has(letter)
    }

    get(letter) {
        return this.children.get(letter)
    }

    add(letter) {
        this.children.set(letter, new TrieNode())
    }

    setWord(word) {
        this.word = word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let curr = this.root
        for (let letter of word) {
            if (!curr.contains(letter)) {
                curr.add(letter)
            }
            curr = curr.get(letter)
        }
        curr.setWord(word)
    }
}

module.exports = findWords
// runtime 73%
// memory 72%
