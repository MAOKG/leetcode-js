class Trie {
    constructor() {
        this.root = new TrieNode()
    }
    /**
     * Inserts a word into the trie.
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root
        for (let char of word) {
            if (!curr.contains(char)) {
                curr.add(char)
            }
            curr = curr.get(char)
        }
        curr.setIsEnd(true)
    }
    /**
     * Returns if the word is in the trie.
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const node = this.searchPrefix(word)
        return node !== null && node.getIsEnd()
    }
    /**
     * Returns if there is any word in the trie that starts with the given prefix.
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return this.searchPrefix(prefix) !== null
    }

    searchPrefix(prefix) {
        let curr = this.root
        for (let char of prefix) {
            if (!curr.contains(char)) {
                return null
            }
            curr = curr.get(char)
        }
        return curr
    }
}

class TrieNode {
    constructor() {
        this.children = new Map()
        this.isEnd = false
    }

    add(char) {
        if (!this.contains(char)) {
            this.children.set(char, new TrieNode())
        }
    }

    contains(char) {
        return this.children.has(char)
    }

    get(char) {
        return this.children.get(char)
    }

    setIsEnd(isEnd) {
        this.isEnd = isEnd
    }

    getIsEnd() {
        return this.isEnd
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

module.exports = Trie
// runtime 97%
// memory 67%
