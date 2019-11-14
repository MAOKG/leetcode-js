const groupAnagrams = require('./groupAnagrams')

test('test case 1', () => {
    var input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']

    expect(groupAnagrams(input)).toEqual([
        ['eat', 'tea', 'ate'],
        ['tan', 'nat'],
        ['bat']
    ])
})
