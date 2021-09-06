/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    const parent = {}
    const emailNameMap = {}

    for (let account of accounts) {
        let name = account[0]
        for (let i = 1; i < account.length; i++) {
            let email = account[i]
            emailNameMap[email] = name
            if (i < account.length - 1) {
                union(parent, email, account[i + 1])
            }
        }
    }

    const emailSets = {}
    for (let email of Object.keys(emailNameMap)) {
        let root = find(parent, email)
        if (!emailSets[root]) {
            emailSets[root] = []
        }
        emailSets[root].push(email)
    }
    const res = []
    for (let email of Object.keys(emailSets)) {
        let name = emailNameMap[email]
        let emails = emailSets[email]
        emails.sort()
        res.push([name, ...emails])
    }

    return res
}

var find = function (parent, x) {
    if (!parent[x]) {
        return x
    }
    return find(parent, parent[x])
}

var union = function (parent, x, y) {
    let p1 = find(parent, x)
    let p2 = find(parent, y)
    if (p1 !== p2) {
        parent[p2] = p1
    }
}

module.exports = accountsMerge
// runtime 76%
// memory 79%
