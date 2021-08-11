const RandomizedCollection = require('./randomizedCollection')

test('test case 1', () => {
    const randomizedCollection = new RandomizedCollection()
    expect(randomizedCollection.insert(1)).toBe(true)
    expect(randomizedCollection.insert(1)).toBe(false)
    expect(randomizedCollection.insert(2)).toBe(true)
    expect([1, 2].includes(randomizedCollection.getRandom())).toBe(true)
    expect(randomizedCollection.remove(1)).toBe(true)
    expect([1, 2].includes(randomizedCollection.getRandom())).toBe(true)
})

test('test case 2', () => {
    const randomizedCollection = new RandomizedCollection()
    expect(randomizedCollection.insert(4)).toBe(true)
    expect(randomizedCollection.insert(3)).toBe(true)
    expect(randomizedCollection.insert(4)).toBe(false)
    expect(randomizedCollection.insert(2)).toBe(true)
    expect(randomizedCollection.insert(4)).toBe(false)

    expect(randomizedCollection.remove(4)).toBe(true)
    expect(randomizedCollection.remove(3)).toBe(true)
    expect(randomizedCollection.remove(4)).toBe(true)
    expect(randomizedCollection.remove(4)).toBe(true)
})

test('test case 3', () => {
    const randomizedCollection = new RandomizedCollection()
    expect(randomizedCollection.insert(1)).toBe(true)
    expect(randomizedCollection.remove(1)).toBe(true)
    expect(randomizedCollection.insert(1)).toBe(true)
})

test('test case 4', () => {
    const randomizedCollection = new RandomizedCollection()
    expect(randomizedCollection.insert(0)).toBe(true)
    expect(randomizedCollection.remove(0)).toBe(true)
    expect(randomizedCollection.insert(-1)).toBe(true)
    expect(randomizedCollection.remove(0)).toBe(false)

    expect(randomizedCollection.getRandom()).toBe(-1)
    expect(randomizedCollection.getRandom()).toBe(-1)
})
