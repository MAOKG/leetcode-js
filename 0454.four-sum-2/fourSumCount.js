/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let count = 0
    const map = {}
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            let sum = A[i] + B[j]
            if (map[sum]) {
                map[sum]++
            } else {
                map[sum] = 1
            }
        }
    }
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            let sum = C[i] + D[j]
            if (map.hasOwnProperty(0 - sum)) {
                count += map[0 - sum]
            }
        }
    }
    return count
}
module.exports = fourSumCount
// runtime 62%
// memory 50%
