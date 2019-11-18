const containsDuplicate = require('./containsDuplicate')

test('test case 1', () => {
    var input = [1, 2, 3, 1]
    expect(containsDuplicate(input)).toBe(true)
})

test('test case 2', () => {
    var input = [1, 2, 3, 4]
    expect(containsDuplicate(input)).toBe(false)
})

test('test case 2', () => {
    var input = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
    expect(containsDuplicate(input)).toBe(true)
})
