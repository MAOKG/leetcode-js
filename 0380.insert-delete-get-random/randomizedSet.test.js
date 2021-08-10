const RandomizedSet = require('./randomizedSet')

test('test case 1', () => {
    const randomizedSet = new RandomizedSet()
    expect(randomizedSet.insert(1)).toBe(true)
    expect(randomizedSet.remove(2)).toBe(false)
    expect(randomizedSet.insert(2)).toBe(true)
    expect([1, 2].includes(randomizedSet.getRandom())).toBe(true)
    expect(randomizedSet.remove(1)).toBe(true)
    expect(randomizedSet.insert(2)).toBe(false)
    expect(randomizedSet.getRandom()).toBe(2)
})
