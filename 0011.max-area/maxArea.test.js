const maxArea = require('./maxArea')

test('test case 1', () => {
    var input = [1, 8, 6, 2, 5, 4, 8, 3, 7]
    var result = maxArea(input)

    expect(result).toEqual(49)
})
