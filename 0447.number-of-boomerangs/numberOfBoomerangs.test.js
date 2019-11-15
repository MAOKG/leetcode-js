const numberOfBoomerangs = require('./numberOfBoomerangs')

test('test case 1', () => {
    var input = [[0, 0], [1, 0], [2, 0]]

    expect(numberOfBoomerangs(input)).toBe(2)
})
