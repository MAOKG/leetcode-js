const maxPoints = require('./maxPoints')

test('test case 1', () => {
    var input = [[1, 1], [2, 2], [3, 3]]

    expect(maxPoints(input)).toBe(3)
})

test('test case 2', () => {
    var input = [[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]

    expect(maxPoints(input)).toBe(4)
})

test('test case 3', () => {
    var input = [[0, 0], [94911151, 94911150], [94911152, 94911151]]

    expect(maxPoints(input)).toBe(2)
})

test('test case 4', () => {
    var input = [[-4, -4], [-8, -582], [-3, 3], [-9, -651], [9, 591]]

    expect(maxPoints(input)).toBe(3)
})
