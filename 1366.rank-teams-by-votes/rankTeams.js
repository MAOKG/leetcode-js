/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
    const n = votes[0].length
    const ranks = new Array(26).fill(0).map((ele) => new Array(n).fill(0))

    for (let vote of votes) {
        for (let i = 0; i < vote.length; i++) {
            let team = vote[i]
            ranks[team.charCodeAt(0) - 'A'.charCodeAt(0)][i]++
        }
    }
    const teams = votes[0].split('')

    teams.sort((a, b) => compareTeams(a, b, ranks, n))

    return teams.join('')
}

var compareTeams = function (a, b, ranks, n) {
    let indexA = a.charCodeAt(0) - 'A'.charCodeAt(0)
    let indexB = b.charCodeAt(0) - 'A'.charCodeAt(0)
    for (let i = 0; i < n; i++) {
        let countA = ranks[indexA][i]
        let countB = ranks[indexB][i]
        if (countA !== countB) {
            return countB - countA
        }
    }

    return a.charCodeAt(0) - b.charCodeAt(0)
}

module.exports = rankTeams
// runtime 9%
// memory 66%
