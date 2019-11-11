const isAnagram = require('./isAnagram')

test('test case 1', () => {
    var s = 'anagram'
    var t = 'nagaram'

    expect(isAnagram(s, t)).toBe(true)
})

test('test case 1', () => {
    var s = 'rat'
    var t = 'car'

    expect(isAnagram(s, t)).toBe(false)
})
