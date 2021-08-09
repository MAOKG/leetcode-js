const TimeMap = require('./timeMap')

test('test case 1', () => {
    const timeMap = new TimeMap()
    timeMap.set('foo', 'bar', 1)
    expect(timeMap.get('foo', 1)).toEqual('bar')
    expect(timeMap.get('foo', 3)).toEqual('bar')
    timeMap.set('foo', 'bar2', 4)
    expect(timeMap.get('foo', 4)).toEqual('bar2')
    expect(timeMap.get('foo', 5)).toEqual('bar2')
})
