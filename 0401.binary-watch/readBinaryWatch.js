/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    const results = []
    const curr = { minutes: 0, hours: 0 }

    populateResults(curr, 0, turnedOn, results)

    return results
}

const minutesMap = {
    0: 1,
    1: 2,
    2: 4,
    3: 8,
    4: 16,
    5: 32
}

const hoursMap = {
    0: 1,
    1: 2,
    2: 4,
    3: 8
}

var populateResults = function(curr, index, remain, results) {
    if (curr.minutes > 59 || curr.hours > 11) {
        return
    }
    if (remain === 0) {
        let time = format(curr)
        results.push(time)
        return
    }
    for (let i = index; i < 10; i++) {
        let m = 0
        let h = 0
        if (i < 6) {
            m = minutesMap[i]
        } else {
            h = hoursMap[i - 6]
        }
        curr.minutes += m
        curr.hours += h
        populateResults(curr, i + 1, remain - 1, results)
        curr.minutes -= m
        curr.hours -= h
    }
}

var format = function({ minutes, hours }) {
    const m = `0${minutes}`.slice(-2)

    return `${hours}:${m}`
}

module.exports = readBinaryWatch
// runtime 78%
// memory 63%
