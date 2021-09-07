const LRUCache = require('./lruCache')

test('test case 1', () => {
    const lRUCache = new LRUCache(2)
    lRUCache.put(1, 1) // cache is {1=1}
    lRUCache.put(2, 2) // cache is {1=1, 2=2}
    const res1 = lRUCache.get(1) // return 1
    expect(res1).toBe(1)
    lRUCache.put(3, 3) // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
    const res2 = lRUCache.get(2) // returns -1 (not found)
    expect(res2).toBe(-1)
    lRUCache.put(4, 4) // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
    const res3 = lRUCache.get(1) // return -1 (not found)
    expect(res3).toBe(-1)
    const res4 = lRUCache.get(3) // return 3
    expect(res4).toBe(3)
    const res5 = lRUCache.get(4) // return 4
    expect(res5).toBe(4)
})

test('test case 2', () => {
    const lRUCache = new LRUCache(2)
    lRUCache.put(1, 0)
    lRUCache.put(2, 2) // cache is {1=0, 2=2}
    const res1 = lRUCache.get(1) // cache is {2=2, 1=0}
    expect(res1).toBe(0)
    lRUCache.put(3, 3) // cache is {1=0, 3=3}
    const res2 = lRUCache.get(2)
    expect(res2).toBe(-1)
    lRUCache.put(4, 4) // cache is {3=3, 4=4}
    const res3 = lRUCache.get(1)
    expect(res3).toBe(-1)
    const res4 = lRUCache.get(3) // cache is {4=4, 3=3}
    expect(res4).toBe(3)
    const res5 = lRUCache.get(4) // cache is {3=3, 4=4}
    expect(res5).toBe(4)
})
