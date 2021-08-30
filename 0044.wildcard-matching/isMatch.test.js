const isMatch = require('./isMatch')

test('test case 1', () => {
  const s = "aa"
  const p = "a"
  const output = false
  const res = isMatch(s, p)
  expect(res).toBe(output)
})

test('test case 2', () => {
  const s = "aa"
  const p = "*"
  const output = true
  const res = isMatch(s, p)
  expect(res).toBe(output)
})

test('test case 3', () => {
  const s = "cb"
  const p = "?a"
  const output = false
  const res = isMatch(s, p)
  expect(res).toBe(output)
})

test('test case 4', () => {
  const s = "adceb"
  const p = "*a*b"
  const output = true
  const res = isMatch(s, p)
  expect(res).toBe(output)
})

test('test case 5', () => {
  const s = "acdcb"
  const p = "a*c?b"
  const output = false
  const res = isMatch(s, p)
  expect(res).toBe(output)
})