const rankTeams = require('./rankTeams')

test('test case 1', () => {
    const votes = ['ABC', 'ACB', 'ABC', 'ACB', 'ACB']
    const output = 'ACB'
    const res = rankTeams(votes)
    expect(res).toBe(output)
})

test('test case 2', () => {
    const votes = ['WXYZ', 'XYZW']
    const output = 'XWYZ'
    const res = rankTeams(votes)
    expect(res).toBe(output)
})

test('test case 3', () => {
    const votes = ['ZMNAGUEDSJYLBOPHRQICWFXTVK']
    const output = 'ZMNAGUEDSJYLBOPHRQICWFXTVK'
    const res = rankTeams(votes)
    expect(res).toBe(output)
})

test('test case 4', () => {
    const votes = ['BCA', 'CAB', 'CBA', 'ABC', 'ACB', 'BAC']
    const output = 'ABC'
    const res = rankTeams(votes)
    expect(res).toBe(output)
})

test('test case 5', () => {
    const votes = ['M', 'M', 'M', 'M']
    const output = 'M'
    const res = rankTeams(votes)
    expect(res).toBe(output)
})
