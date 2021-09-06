/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    const emailNameMap = {}
    const graph = {}
    for (let account of accounts) {
        let name = account[0]
        for (let i = 1; i < account.length; i++) {
            let email = account[i]
            emailNameMap[email] = name
            if (!graph[email]) {
                graph[email] = new Set()
            }
            graph[email].add(account[1])
            graph[account[1]].add(email)
        }
    }
    const visited = {}
    const res = []
    for (let email of Object.keys(graph)) {
        if (!visited[email]) {
            let emails = []
            dfs(email, graph, visited, emails)
            emails.sort()
            let name = emailNameMap[email]
            res.push([name, ...emails])
        }
    }

    return res
}

var dfs = function (email, graph, visited, emails) {
    emails.push(email)
    visited[email] = true
    for (let neighbour of graph[email]) {
        if (!visited[neighbour]) {
            dfs(neighbour, graph, visited, emails)
        }
    }
}

module.exports = accountsMerge
// runtime 69%
// memory 61%
