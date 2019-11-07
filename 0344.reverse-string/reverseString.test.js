const reverseString = require('./reverseString')

test('test case 1', () => {
    var arr = ['h', 'e', 'l', 'l', 'o']
    reverseString(arr)

    expect(arr).toEqual(['o', 'l', 'l', 'e', 'h'])
})

test('test case 2', () => {
    var arr = ['H', 'a', 'n', 'n', 'a', 'h']
    reverseString(arr)

    expect(arr).toEqual(['h', 'a', 'n', 'n', 'a', 'H'])
})
