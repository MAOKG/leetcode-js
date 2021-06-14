const readBinaryWatch = require('./readBinaryWatch')

test('test case 1', () => {
    const turnedOn = 1
    const output = [
        '0:01',
        '0:02',
        '0:04',
        '0:08',
        '0:16',
        '0:32',
        '1:00',
        '2:00',
        '4:00',
        '8:00'
    ]
    const result = readBinaryWatch(turnedOn)
    expect(result).toEqual(output)
})

test('test case 2', () => {
    const turnedOn = 9
    const output = []
    const result = readBinaryWatch(turnedOn)
    expect(result).toEqual(output)
})
