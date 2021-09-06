const Trie = require('./trie')

test('test case 1', () => {
    const trie = new Trie()
    trie.insert('apple')
    const res1 = trie.search('apple') // return True
    expect(res1).toBe(true)
    const res2 = trie.search('app') // return False
    expect(res2).toBe(false)
    const res3 = trie.startsWith('app') // return True
    expect(res3).toBe(true)
    trie.insert('app')
    const res4 = trie.search('app') // return True
    expect(res4).toBe(true)
})

test('test case 2', () => {
    const trie = new Trie()
    const res1 = trie.search('a')
    expect(res1).toBe(false)
})
