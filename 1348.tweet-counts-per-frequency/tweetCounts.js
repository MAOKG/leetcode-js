class TweetCounts {
    constructor() {
        this._stroe = new Map()
    }
    /**
     * @param {string} tweetName
     * @param {number} time
     * @return {void}
     */
    recordTweet(tweetName, time) {
        if (this._stroe.has(tweetName)) {
            let tweetRecord = this._stroe.get(tweetName)
            let count = tweetRecord.has(time) ? tweetRecord.get(time) : 0
            count++
            tweetRecord.set(time, count)
        } else {
            let tweetRecord = new Map()
            tweetRecord.set(time, 1)
            this._stroe.set(tweetName, tweetRecord)
        }
    }
    /**
     * @param {string} freq
     * @param {string} tweetName
     * @param {number} startTime
     * @param {number} endTime
     * @return {number[]}
     */
    getTweetCountsPerFrequency(freq, tweetName, startTime, endTime) {
        let interval = 60
        if (freq === 'hour') {
            interval = 3600
        } else if (freq === 'day') {
            interval = 86400
        }
        const chunkLength = Math.ceil((1 + endTime - startTime) / interval)
        const result = new Array(chunkLength).fill(0)
        if (this._stroe.has(tweetName)) {
            const tweetRecord = this._stroe.get(tweetName)
            tweetRecord.forEach((count, time) => {
                if (time >= startTime && time <= endTime) {
                    const chunkIndex = Math.floor((time - startTime) / interval)
                    result[chunkIndex] += count
                }
            })
        }

        return result
    }
}

/**
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */

module.exports = TweetCounts
// runtime 45%
// memory 89%
