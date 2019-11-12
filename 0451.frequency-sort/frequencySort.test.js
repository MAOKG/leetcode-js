const frequencySort = require('./frequencySort')

test('test case 1', () => {
    var input = 'tree'
    var result = frequencySort(input)
    var isCorrect = result === 'eert' || result === 'eetr'
    expect(isCorrect).toBe(true)
})

test('test case 2', () => {
    var input = 'cccaaa'
    var result = frequencySort(input)
    var isCorrect = result === 'cccaaa'
    expect(isCorrect).toBe(true)
})

test('test case 3', () => {
    var input = 'Aabb'
    var result = frequencySort(input)
    var isCorrect = result === 'bbAa' || result === 'bbaA'
    expect(isCorrect).toBe(true)
})
