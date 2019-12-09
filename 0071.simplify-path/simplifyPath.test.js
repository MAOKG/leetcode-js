const simplifyPath = require('./simplifyPath')

test('test case 1', () => {
    var input = '/home/'
    expect(simplifyPath(input)).toBe('/home')
})

test('test case 2', () => {
    var input = '/../'
    expect(simplifyPath(input)).toBe('/')
})

test('test case 3', () => {
    var input = '/home//foo/'
    expect(simplifyPath(input)).toBe('/home/foo')
})

test('test case 4', () => {
    var input = '/a/./b/../../c/'
    expect(simplifyPath(input)).toBe('/c')
})

test('test case 5', () => {
    var input = '/a/../../b/../c//.//'
    expect(simplifyPath(input)).toBe('/c')
})

test('test case 6', () => {
    var input = '/a//b////c/d//././/..'
    expect(simplifyPath(input)).toBe('/a/b/c')
})

test('test case 7', () => {
    var input = '/.'
    expect(simplifyPath(input)).toBe('/')
})

test('test case 8', () => {
    var input = '/...'
    expect(simplifyPath(input)).toBe('/...')
})
